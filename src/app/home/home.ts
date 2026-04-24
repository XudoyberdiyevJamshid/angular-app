import { Component, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { DasturlarService } from '../dasturlar';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { debounceTime, delay, distinctUntilChanged, interval, of, Subscription, switchMap } from 'rxjs';
import { ReactiveFormsModule, FormControl } from '@angular/forms'

@Component({
  selector: 'app-home',
  imports: [DatePipe, CurrencyPipe,ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit, OnDestroy {
  omborxona = inject(DasturlarService);
  bugungiSana = new Date();
  kursNarxi = 2500000;

  qidiruvQutisi = new FormControl('')
  topilganNatijalar = signal<string[]>([]);

  meningChelagim: Subscription | undefined;

  dasturQoshish(yangiNom: string) {
    if (yangiNom) {
      this.omborxona.qoshish(yangiNom);
    }
  }

  ngOnInit() {


    this.meningChelagim = this.qidiruvQutisi.valueChanges.pipe(
      
      // 1-filtr: Odam yozishdan to'xtab, 500 millisoniya (yarim soniya) o'tmaguncha suvni to'sib turadi.
      debounceTime(500), 
      
      // 2-filtr: Agar odam bitta so'zni yozib o'chirib yana o'sha so'zni yozsa, o'tkazmaydi (takrorlanishni oldini oladi).
      distinctUntilChanged(),
      
      // 3-filtr: Eskisini o'ldirib, yangisini ulovchi. Agar serverdan javob kelmay turib odam yana yozib yuborsa, oldingi so'rovni havoda bekor qiladi!
      switchMap((qidiruvSozi) => this.soxtaServerdanIzlash(qidiruvSozi || ''))

    ).subscribe((natija) => {
      // Barcha filtrlardan o'tib kelgan toza javobni signalga saqlaymiz
      this.topilganNatijalar.set(natija);
    });
  }
  

  soxtaServerdanIzlash(soz: string) {
    console.log(`📡 Serverga so'rov ketdi: "${soz}"`); // Qachon server ishlaganini konsolda ko'ramiz
    
    // Omborxonadagi ro'yxatdan qidirilayotgan so'zni topamiz
    let natija = this.omborxona.royxat().filter(dastur => 
      dastur.toLowerCase().includes(soz.toLowerCase())
    );

    // delay(1000) orqali internet 1 soniya o'ylab javob berganini simulyatsiya qilamiz
    return of(natija).pipe(delay(1000)); 
  }

  ngOnDestroy() {
    if (this.meningChelagim) this.meningChelagim.unsubscribe();
  }
}

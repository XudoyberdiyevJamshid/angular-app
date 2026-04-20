import { Component, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { DasturlarService } from '../dasturlar';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit, OnDestroy {
  omborxona = inject(DasturlarService);
  bugungiSana = new Date();
  kursNarxi = 2500000;

  meningChelagim: Subscription | undefined;

  dasturQoshish(yangiNom: string) {
    if (yangiNom) {
      this.omborxona.qoshish(yangiNom);
    }
  }

  ngOnInit() {
    const vaqtDaryosi = interval(1000);

    this.meningChelagim = vaqtDaryosi.subscribe((suvTomchisi) => {
      console.log("Daryodan kelgan ma'lumot:", suvTomchisi);
    });
  }

  ngOnDestroy() {
    // if (this.meningChelagim) {
    //   this.meningChelagim.unsubscribe(); // Obunani bekor qilamiz
    //   console.log("Boshqa sahifaga o'tdik. Chelak daryodan olinib, yopildi!");
    // }
  }
}

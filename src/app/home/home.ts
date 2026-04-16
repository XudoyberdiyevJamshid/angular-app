import { Component, inject, signal } from '@angular/core';
import { DasturlarService } from '../dasturlar';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  omborxona = inject(DasturlarService);
  bugungiSana = new Date(); // Hozirgi kun va vaqtni oladi
  kursNarxi = 2500000;

  dasturQoshish(yangiNom: string) {
    if (yangiNom) {
      this.omborxona.qoshish(yangiNom);
    }
  }
}

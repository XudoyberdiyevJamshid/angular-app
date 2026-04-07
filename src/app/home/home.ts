import { Component, inject, signal } from '@angular/core';
import { DasturlarService } from '../dasturlar';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  omborxona = inject(DasturlarService);

  dasturQoshish(yangiNom: string) {
    if (yangiNom) {
      this.omborxona.qoshish(yangiNom);
    }
  }
}

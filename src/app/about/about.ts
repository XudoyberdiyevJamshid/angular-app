import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { DasturlarService } from '../dasturlar';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  http = inject(HttpClient);
  omborxona = inject(DasturlarService);
  jamoa = signal<any[]>([]);

  constructor() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((malumot: any) => {
      this.jamoa.set(malumot);
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { DasturlarService } from '../dasturlar';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About implements OnInit {
  http = inject(HttpClient);
  omborxona = inject(DasturlarService);
  jamoa = signal<any[]>([]);
  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((malumot: any) => {
      this.jamoa.set(malumot);
    });
  }
}

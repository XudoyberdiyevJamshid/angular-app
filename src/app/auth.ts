import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  tizimgaKirdimi = signal(false);

  login() {
    this.tizimgaKirdimi.set(true);
    alert('Xush kelibsiz! Tizimga kirdingiz.');
  }

  logout() {
    this.tizimgaKirdimi.set(false);
    alert('Tizimdan chiqdingiz. Xayr!');
  }
}

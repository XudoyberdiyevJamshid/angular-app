import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // 1. Dastur yonganda signalni bo'sh qilib emas, brauzer xotirasini tekshirib ishga tushiramiz.
  // Agar xotirada 'tizim_holati' degan yozuv 'kirdi' ga teng bo'lsa, true qilamiz.
  tizimgaKirdimi = signal(localStorage.getItem('tizim_holati') === 'kirdi');

  login() {
    this.tizimgaKirdimi.set(true);

    // 2. Tizimga kirganda brauzer xotirasiga muhrlab qo'yamiz
    localStorage.setItem('tizim_holati', 'kirdi');

    alert('Xush kelibsiz! Tizimga kirdingiz.');
  }

  logout() {
    this.tizimgaKirdimi.set(false);

    // 3. Tizimdan chiqqanda xotirani tozalab tashlaymiz
    localStorage.removeItem('tizim_holati');

    alert('Tizimdan chiqdingiz. Xayr!');
  }
}

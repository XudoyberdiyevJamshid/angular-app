import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);

  const router = inject(Router);

  if (auth.tizimgaKirdimi()) {
    return true;
  } else {
    alert("Kechirasiz! Bu sahifaga kirish uchun oldin ro'yxatdan o'ting.");
    router.navigate(['/']);
    return false;
  }
};

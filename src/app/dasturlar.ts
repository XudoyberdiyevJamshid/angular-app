import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DasturlarService {
  royxat = signal(['Angular', 'React', 'Vue', 'Svelte']);

  qoshish(yangiNom: string) {
    if (yangiNom) {
      this.royxat.update((eskilari) => [...eskilari, yangiNom]);
    }
  }

  ochirish(ochiriladiganNom: string) {
    this.royxat.update((eskilari) => eskilari.filter((dastur) => dastur !== ochiriladiganNom));
  }
}

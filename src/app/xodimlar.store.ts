import { computed } from '@angular/core';
import { signalStore, withState, withComputed, withMethods, patchState } from '@ngrx/signals';

// 1. STATE: Omborxonada nimalar saqlanishi kerakligini qat'iy belgilaymiz (Skelet)
type XodimlarState = {
  xodimlarRoyxati: string[];
  yuklanmoqda: boolean;
};

// 2. Boshlang'ich holatni beramiz
const boshlangichHolat: XodimlarState = {
  xodimlarRoyxati: ['Alisher', 'Malika', 'Jasur'],
  yuklanmoqda: false
};

// 3. SEHR SHU YERDA: Katta Omborxonani yaratamiz
export const XodimlarStore = signalStore(
  { providedIn: 'root' }, // Butun loyiha bo'yicha bitta nusxa bo'ladi
  
  // A) HOLAT (State)
  withState(boshlangichHolat),

  // B) HISOBLANGAN (Computed) - Bu xuddi Vue dagi Getter'larga o'xshaydi
  withComputed((store) => ({
    // Faqat 'A' harfidan boshlanadigan xodimlar
    A_harfidagiXodimlar: computed(() => 
      store.xodimlarRoyxati().filter(ism => ism.startsWith('A'))
    ),
    // Umumiy xodimlar soni
    jamiXodimlarSoni: computed(() => store.xodimlarRoyxati().length)
  })),

  // C) METODLAR (Methods) - Ma'lumotni o'zgartirishning YAGONA qonuniy yo'li
  withMethods((store) => ({
    
    // Yangi xodim qo'shish
    qoshish(yangiXodim: string) {
      // patchState - bu omborxonani xavfsiz yangilash usuli. U eskisini buzmaydi, faqat yangi narsa qo'shadi.
      patchState(store, (state) => ({ 
        xodimlarRoyxati: [...state.xodimlarRoyxati, yangiXodim] 
      }));
    },

    // Xodimni ishdan bo'shatish (o'chirish)
    ochirish(xodimIsmi: string) {
      patchState(store, (state) => ({ 
        xodimlarRoyxati: state.xodimlarRoyxati.filter(ism => ism !== xodimIsmi) 
      }));
    }
    
  }))
);
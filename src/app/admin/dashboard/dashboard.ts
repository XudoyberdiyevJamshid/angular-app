import { Component, inject } from '@angular/core';
// Biz yozgan Store ni chaqiramiz
import { XodimlarStore } from '../../xodimlar.store'; 

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  // HTML ni shu faylning o'zida yozib ketamiz (tezroq ko'rish uchun)
  template: `
    <div style="background: white; padding: 20px; border-radius: 8px;">
      <h2>🏢 HRM - Xodimlar Boshqaruvi</h2>
      
      <!-- Computed orqali jami sonni chiqaramiz -->
      <p style="color: gray;">Tizimdagi jami xodimlar soni: <b>{{ store.jamiXodimlarSoni() }}</b> ta</p>
      
      <hr>

      <ul style="list-style: none; padding: 0;">
        <!-- To'g'ridan-to'g'ri Store dagi ro'yxatni aylanib chiqamiz -->
        @for (xodim of store.xodimlarRoyxati(); track xodim) {
          <li style="padding: 10px; border-bottom: 1px solid #eee; display: flex; justify-content: space-between;">
            <span>💼 {{ xodim }}</span>
            <!-- O'chirish metodini chaqiramiz -->
            <button (click)="store.ochirish(xodim)" style="background: red; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer;">Ishdan bo'shatish</button>
          </li>
        }
      </ul>

      <div style="margin-top: 20px; display: flex; gap: 10px;">
        <!-- Yangi xodim qo'shish -->
        <input #yangiXodim type="text" placeholder="Xodimning ismini yozing..." style="padding: 8px; flex-grow: 1;">
        <button (click)="xodimQoshish(yangiXodim.value); yangiXodim.value = ''" style="background: green; color: white; border: none; padding: 8px 15px; border-radius: 4px; cursor: pointer;">+ Ishga qabul qilish</button>
      </div>
    </div>
  `
})
export class Dashboard {
  
  // Store ni xuddi Service kabi loyihaga ulab olamiz
  store = inject(XodimlarStore);

  xodimQoshish(ism: string) {
    if(ism.trim().length > 0) {
      this.store.qoshish(ism);
    }
  }
}
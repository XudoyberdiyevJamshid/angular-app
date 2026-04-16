import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  aloqaForm = new FormGroup({
    ism: new FormControl('', [Validators.required, Validators.minLength(3)]),
    telefon: new FormControl('', [Validators.required, Validators.minLength(3)]),
    xabar: new FormControl('', [Validators.required]),
  });

  formaniYuborish() {
    console.log("Jo'natilgan ma'lumotlar:", this.aloqaForm.value);

    // Ekranda ham ko'rishimiz uchun:
    alert("Ma'lumotlar saqlandi! Konsolni tekshiring.");

    // Yuborilgandan so'ng formani avtomatik tozalab qo'yamiz:
    this.aloqaForm.reset();
  }
}

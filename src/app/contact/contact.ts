import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {

  fb = inject(FormBuilder)

  aloqaForm = this.fb.group({
    ism: new FormControl('', [Validators.required, Validators.minLength(3)]),
    telefon: new FormControl('', [Validators.required, Validators.minLength(3)]),
    xabar: new FormControl('', [Validators.required]),
    konikmalar:this.fb.array([
      this.fb.control('',Validators.required)
    ])
  });

  get konikmalar() {
    return this.aloqaForm.get('konikmalar') as FormArray;
  }

  formaniYuborish() {
    console.log("Jo'natilgan ma'lumotlar:", this.aloqaForm.value);

    // Ekranda ham ko'rishimiz uchun:
    alert("Ma'lumotlar saqlandi! Konsolni tekshiring.");

    // Yuborilgandan so'ng formani avtomatik tozalab qo'yamiz:
    this.aloqaForm.reset();
  }

  yangiKonikmaQoshish(){
    this.konikmalar.push(this.fb.control('',Validators.required))
  }
  konikmaniOchirish(index: number) {
    this.konikmalar.removeAt(index);
  }
}

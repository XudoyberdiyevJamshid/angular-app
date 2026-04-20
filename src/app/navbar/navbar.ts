import { Component, inject, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../auth';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  saytNomi = input<string>('Odatiy Menyu');

  toogleTheme = output<string>();

  changeTheme() {
    this.toogleTheme.emit('change');
  }
  auth = inject(AuthService);
}

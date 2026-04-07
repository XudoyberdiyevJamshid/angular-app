import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

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
}

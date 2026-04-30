import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";
import { Highlight } from "../highlight";

@Component({
  selector: 'app-admin',
  imports: [RouterLink, RouterOutlet, Highlight],
  templateUrl: './admin.html',
  styleUrl: './admin.scss',
})
export class Admin {}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaComponent } from "./components/lista/lista.component";
import { NgFor } from '@angular/common';
import { DataComponent } from "./components/data/data.component";
import { ButtonComponent } from "./components/button/button.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaComponent, NgFor, DataComponent, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'prova-labWeb';
}

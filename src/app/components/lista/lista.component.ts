import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [NgFor],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent {
  users = [
    { name: 'João', age: 25 },
    { name: 'Maria', age: 30 }
  ];
}

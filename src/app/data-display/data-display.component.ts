import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-data-display',
  standalone: true,
  imports: [NgFor],
  templateUrl: './data-display.component.html',
  styleUrl: './data-display.component.scss'
})
export class DataDisplayComponent {
  data: string[] = [];

  constructor(private dataService: DataService) {
    this.data = this.dataService.getData();
    // verificar se foram injetados
    console.log('Dados injetados:', this.data);
  }
}

import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FilterPipe } from "../filter.pipe";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-component',
  standalone: true,
  imports: [NgFor, FilterPipe,FormsModule],
  templateUrl: './filter-component.component.html',
  styleUrl: './filter-component.component.scss'
})
export class FilterComponentComponent {

  searchTerm: string = '';
  users = [
    { name: 'Carlos', age: 25 },
    { name: 'Ana', age: 32 },
    { name: 'Beatriz', age: 21 }
  ];
}

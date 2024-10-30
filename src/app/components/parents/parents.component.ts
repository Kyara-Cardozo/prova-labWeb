import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-parents',
  standalone: true,
  imports: [ChildComponent, NgFor],
  templateUrl: './parents.component.html',
  styleUrl: './parents.component.scss'
})
export class ParentsComponent {

  selectedItem: string = '';
  items = ['Item1', 'Item2', 'Item3'];

  onItemClicked(item: string) {
    this.selectedItem = item;
    console.log('recebido no parent:', item);
  }
}

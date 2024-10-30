import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {

  @Input()
  item!: string;
  @Output() itemClicked = new EventEmitter<string>();

  onItemClicked() {
    this.itemClicked.emit(this.item);
    console.log('cliclou:', this.item);
  }
}

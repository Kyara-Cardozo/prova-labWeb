import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getData() {
    return ['item1', 'item2', 'item3'];
  }
}
import { Component } from '@angular/core';
import { Item } from './model/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  list: Item[] = [];

  addToList(value) {
    this.list.push(new Item(value, false));
  }

  disableCheckbox(value) {
  }
}

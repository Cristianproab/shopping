import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/components/models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  items: Item[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        id: 0,
        title: 'manzana',
        price: 10.5,
        quantity: 4,
        completed: false
      },
      {
        id: 1,
        title: 'pan',
        price: 3.5,
        quantity: 8,
        completed: true
      }
    ];
  }

}

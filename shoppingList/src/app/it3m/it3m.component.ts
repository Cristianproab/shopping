import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../components/models/item';

@Component({
  selector: 'app-it3m',
  templateUrl: './it3m.component.html',
  styleUrls: ['./it3m.component.scss']
})
export class It3mComponent implements OnInit {
@Input() item: Item = new Item();


  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  public listOfFruits = [
    'orange',
    'watermelon',
    'strawbery',
    'pineapple',
    'apple',
  ];
  public fruitStore = [
    {
      name: 'Orange',
      price: 10,
      from: 'VN',
      sale: true,
    },
    {
      name: 'Watermelon',
      price: 12,
      from: 'US',
      sale: false,
    },
    {
      name: 'Apple',
      price: 7.5,
      from: 'China',
      sale: true,
    },
    {
      name: 'Strawberry',
      price: 18,
      from: 'USA',
      sale: false,
    },
    {
      name: 'Melon',
      price: 9,
      from: 'Korea',
      sale: true,
    },
  ];
  ngOnInit(): void {
    console.log(`fruit: ${this.listOfFruits}`);
  }
}

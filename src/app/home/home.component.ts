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
  ngOnInit(): void {
    console.log(`fruit: ${this.listOfFruits}`);
  }
}

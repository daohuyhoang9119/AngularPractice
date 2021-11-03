import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  public hisName = 'Ryan';
  public myName = 'King';
  public hisAge = 19;
  public myAge = -1;

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor() {}
  public loginName = 'admin';
  public num = '1';
  public myColor = 'red';
  public myColor2 = 'yellow';
  ngOnInit(): void {}
}

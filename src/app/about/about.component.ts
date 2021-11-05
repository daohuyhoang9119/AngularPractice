import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor(private common: CommonService) {}
  public counter = 0;
  public counterBinhPhuong = 0;
  //
  public loginName = 'admin';
  public num = '1';
  public myColor = 'red';
  public myColor2 = 'yellow';
  ngOnInit(): void {
    this.counter = this.common.counter;
    this.counterBinhPhuong = this.common.binhPhuong(this.counter);
    this.common.counter++;
  }
}

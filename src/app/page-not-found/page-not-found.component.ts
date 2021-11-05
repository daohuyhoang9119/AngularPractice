import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
})
export class PageNotFoundComponent implements OnInit {
  constructor(private common: CommonService) {}
  public counter = 0;
  public counterBinhPhuong = 0;
  ngOnInit(): void {
    // this.counter = this.common.counter;
    // this.counterBinhPhuong = this.common.multipleTwo(this.counterBinhPhuong);
    // this.common.counter++;
  }
}

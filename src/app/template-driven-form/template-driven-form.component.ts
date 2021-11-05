import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css'],
})
export class TemplateDrivenFormComponent implements OnInit {
  constructor(private common: CommonService) {}
  public name = '';
  public age = '';
  ngOnInit(): void {}
  public user = [
    {
      name: '',
      age: '',
    },
  ];
  public submitForm(): void {
    console.log(`user: ${this.user[0].name}, age: ${this.user[0].age}`);
    this.common.submitData(this.user);
  }
}

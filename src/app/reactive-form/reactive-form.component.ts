import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonService } from './../Services/common.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  //khai bao formgroup
  public formData = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });
  public formData2 = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
  });

  public formDataBuilder = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
  });
  constructor(
    private common: CommonService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}
  public onSubmit(): void {
    // console.log(this.formData);
    // if (!this.formData.value) {
    //   return;
    // } else {
    //   console.log(this.formData.value);
    // }
    // return;
    // this.common.submitData(this.formData.value);
  }
  public onSubmit2(): void {
    // this.common.submitData(this.formData.value);
    console.log(this.formData.value);
  }
}

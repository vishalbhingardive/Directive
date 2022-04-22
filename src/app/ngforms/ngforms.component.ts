import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ngforms',
  template:`<form #f="ngForm" (ngSubmit)="onSubmit(f.form)" novalidate>
  <input name="first" ngModel required #first>
  <input name="last" ngModel>
  <button [disabled]="f.invalid">Submit</button>
  </form>
  
  <p>Form value:Form value:{{f.value |json}}</p>
  <p> Form valid:{{f.valid}}</p>
  `
})
export class NGFormsComponent implements OnInit {

  onSubmit(f:FormGroup){
    console.log(f.value);
    console.log(f.valid);
  }
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  template:`<div class="container">
  <form class="form-group"[formGroup]="myForm" (ngSubmit)="onSubmit()">
  <label>First Name</label><input type="text" class="form-control" formControllerName="fname" >
  <label>Last Name</label><input type="text" class="form-control" formControllerName="lname" required ><br>
  <input type="submit" value="submit">
  </form>
  </div>` 
})
export class FormGroupComponent implements OnInit {
 myForm!:FormGroup;
  constructor() {
    this.myForm=new FormGroup({
      fname:new FormControl('Vishal'),
      lname:new FormControl('Bhingardive')
    })
   }
   onSubmit()
   {
     console.log(this.myForm.value);
     console.log(this.myForm.controls['fname'].value);
     console.log(this.myForm.controls['fname'].valid);
     console.log(this.myForm.controls['lname'].value);
     console.log(this.myForm.controls['lname'].valid);

   }
ngOnInit(): void {
  
}
}
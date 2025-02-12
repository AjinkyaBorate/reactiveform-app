import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {

  myform!: FormGroup
  //BY form control

  // constructor(){
  //   this.myform = new FormGroup({
  //     name:new FormControl("Ajinkya"),
  //     age:new FormControl("22"),
  //     email:new FormControl("ab")
  //   });
  // }

  // by form builder
  constructor(private fb: FormBuilder) {
    this.myform = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      age: ["",Validators.required],
      email: ["",Validators.required]

    });
  }
  get name() { return this.myform.get('name'); }
  get age() { return this.myform.get('age'); }
  get email() { return this.myform.get('email'); }
  onSubmit() {
    console.log(this.myform.value);
    console.log("Name:" + this.myform.value.name);
    console.log("Age:" + this.myform.value.age);
    console.log("Email:" + this.myform.value.email);
    console.log("Touched:"+this.myform.touched);
    console.log("untouched:"+this.myform.untouched);
    console.log("dirty:"+this.myform.dirty);
    console.log("pristine:"+this.myform.pristine);
    console.log("valid:"+this.myform.value.valid);
  }
}

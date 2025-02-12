import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  myform!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.myform = this.fb.group({
      username: ["", [Validators.required, Validators.minLength(3), Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
    });
  }
  get username() { return this.myform.get('username'); }
  get password() { return this.myform.get('password'); }
  onSubmit() {
    if(this.myform.valid ){
      alert('Login successful')
      console.log(this.myform.value);
    }else{
      alert('Invalid credentials ')
    }
  }
}

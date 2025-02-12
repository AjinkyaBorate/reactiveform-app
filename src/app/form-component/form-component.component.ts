import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  imports: [FormsModule],
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.css'
})
export class FormComponentComponent implements OnInit {
  fname!: string;
  lname!: string;

  constructor() {
    console.log("inside component")
  }
  ngOnInit(): void {
    console.log("inside ngOnInit")
  }
  onSubmit(): void {
    console.log("inside onSubmit")
    alert("first name: " + this.fname)
  }
}

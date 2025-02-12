import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule
  ],
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css'],
})
export class FormArrayComponent {
  myform!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myform = this.fb.group({
      contactlist: this.fb.array([
        this.fb.control('') // Initial control
      ])
    });
  }

  get contactlist() {
    return this.myform.get('contactlist') as FormArray;
  }

  addNewContact() {
    this.contactlist.push(this.fb.control(''));
  }

  removeContact(i: number) {
    this.contactlist.removeAt(i);
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponentComponent } from './form-component/form-component.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { LoginComponent } from './login/login.component';
import { FormArrayComponent } from './form-array/form-array.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormComponentComponent,EmployeeFormComponent,LoginComponent,FormArrayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Reactive-Forms-App';
}

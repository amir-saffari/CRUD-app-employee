import { Component , Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-create',
  providers:[provideNativeDateAdapter() ,],
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule ,  MatFormFieldModule , MatDatepickerModule , MatInputModule , MatButtonModule , MatRadioModule , ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  
  form!: FormGroup;

  
  constructor(public employeeService: EmployeeService , private router : Router){}

  ngOnInit() : void{
    this.form = new FormGroup({
      firstName: new FormControl('' , [Validators.required]),
      lastName: new FormControl('' , [Validators.required]),
      email: new FormControl('' , [ Validators.required , Validators.email]),
      DOB: new FormControl('' , [Validators.required]),
      experience: new FormControl('' , Validators.required),
      jender: new FormControl('' , [Validators.required]),
      role: new FormControl('' , [Validators.required]),
      salary: new FormControl('' , [Validators.required])
    }) 
  }

  public myError = (formcontrolName: string, errorName: string) =>{
    return this.form.controls[formcontrolName].hasError(errorName);
    }
  
  get f(){
    return this.form.controls
  }
  submit() {
    
    if(this.form.valid){
      this.employeeService.create(this.form.value).subscribe((res:any) => {
        console.log("employee create successfully");
        this.router.navigateByUrl('employee/index'); 
      })
    }
  }
  cancel (){
    this.router.navigateByUrl('employee/index');
  }
}

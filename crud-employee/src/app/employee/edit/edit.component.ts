import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-edit',
  providers:[provideNativeDateAdapter()],
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule , MatFormFieldModule , MatDatepickerModule , MatInputModule , MatButtonModule , MatRadioModule ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  form!: FormGroup;
  employee!: Employee;
  id!: number;

  constructor(
    public employeeService: EmployeeService,
    private router: Router , 
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['employeeId'];
    this.employeeService.find(this.id).subscribe((data: Employee) =>{
      this.employee = data;
    } )

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

  get f(){
    return this.form.controls
  }

  submit() {
    console.log(this.form.value);

    this.employeeService.update(this.id, this.form.value ).subscribe((res:any) => {
      console.log("employee update successfully");
      this.router.navigateByUrl('employee/index'); 
    }) 
  }

  cancel (){
    this.router.navigateByUrl('employee/index');
  }

  public myError = (formcontrolName: string, errorName: string) =>{
    return this.form.controls[formcontrolName].hasError(errorName);
    }
}

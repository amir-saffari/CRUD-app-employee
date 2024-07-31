import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
  
@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule],
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

    this.employeeService.create(this.form.value).subscribe((res:any) => {
      console.log("employee create successfully");
      this.router.navigateByUrl('employee/index'); 
    })
    
    
  }
}

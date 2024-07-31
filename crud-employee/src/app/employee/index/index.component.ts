import { Component  } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { log } from 'console';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule , RouterModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

employees: Employee[] = [];
      
  constructor(public employeeService: EmployeeService) { }
      
  ngOnInit(): void {
    this.employeeService.getAll().subscribe((data: Employee[])=>{
      this.employees = data;
    })  
  }
      
  deleteemployee(id:number){
    let confirm = window.confirm("Are you sure you want to delete this employee?");
    if (confirm){
      this.employeeService.delete(id).subscribe(res => {
        this.employees = this.employees.filter(item => item.id !== id);
        alert('employee deleted successfully!');
   })
    } 
  } 
}

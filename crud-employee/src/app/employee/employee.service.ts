import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiURL = "https://66a23b4c967c89168f1f4859.mockapi.io";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }; 
    
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.apiURL}/employee/`);
  }

  create(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(`${this.apiURL}/employee/`, employee, this.httpOptions);
  }

  find(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.apiURL}/employee/${id}`);
  }

  update(id: number, employee: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(`${this.apiURL}/employee/${id}`, employee, this.httpOptions);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiURL}/employee/${id}`, this.httpOptions);
  }
}

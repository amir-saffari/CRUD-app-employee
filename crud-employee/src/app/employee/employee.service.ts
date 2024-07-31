import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable , throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiURL = "https://66a23b4c967c89168f1f4859.mockapi.io"

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  }   
    
  constructor(private httpClient: HttpClient) {}

  getAll (): Observable<any> {
    return this.httpClient.get<any>(this.apiURL + '/employee/')
    .pipe(
      catchError(this.errorHandler)
    )
  }
  create(employee: Employee): Observable<any> {
    return this.httpClient.post<any>(this.apiURL + '/employee/' , JSON.stringify(employee) , this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  find(id:number): Observable<any> {
    return this.httpClient.get<any>(this.apiURL+'/employee/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  update(id:number, employee:Employee): Observable<any> {
  
    return this.httpClient.put(this.apiURL + '/employee/' + id, JSON.stringify(employee) , this.httpOptions)
 
    .pipe( 
      catchError(this.errorHandler)
    )
  }

  delete(id:number): Observable<any> {
    return this.httpClient.delete<any>(this.apiURL+ '/employee/' + id , this.httpOptions )
    .pipe(
      catchError(this.errorHandler)
    )
  }
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => errorMessage);
 }
}
  

  

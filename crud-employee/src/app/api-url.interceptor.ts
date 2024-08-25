import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee/employee';

@Injectable()
export class ApiUrlInterceptor implements HttpInterceptor {

  private apiURL = "https://66a23b4c967c89168f1f4859.mockapi.io";

  intercept(req: HttpRequest<Employee>, next: HttpHandler): Observable<HttpEvent<Employee>> {
    
    const apiReq = req.clone({ url: `${this.apiURL}${req.url}` });
    return next.handle(apiReq);
  }
}
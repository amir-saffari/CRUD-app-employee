import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiUrlInterceptor implements HttpInterceptor {

  private apiURL = "https://66a23b4c967c89168f1f4859.mockapi.io";

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const apiReq = req.clone({ url: `${this.apiURL}${req.url}` });
    return next.handle(apiReq);
  }
}
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private service: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler){
    let token = this.service.getAuthorizationToken();

    if(token){
      const cloneReq = request.clone({
        headers: request.headers.set('Authorization', token)
      })
      return next.handle(cloneReq);
    } else {
      return next.handle(request);
    }
    
  }
}

export const AuthInterceptorProvider = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
]

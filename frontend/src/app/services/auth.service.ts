import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { Credenciais } from '../components/models/Credenciais';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtService: JwtHelperService = new JwtHelperService();

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router) { }

  authenticate(creds: Credenciais) {
    return this.http.post(`${API_CONFIG.baseUrl}/login`, creds, {
      observe: 'response',
      responseType: 'text'
    }).subscribe( response => {
      let token = response.body;
      localStorage.setItem("token", token);
      this.toastr.success("Login with success", "Sucess");
      this.router.navigate(['urls']);
      //console.log(localStorage.getItem("token"));
    },
    error => {
      this.toastr.error("Login and/or password invalid!", "Login Faliure")
    });
  }

  isAuthenticated() {
    return localStorage.getItem('token')!= null;
  }

  getAuthorizationToken() {
    const token = window.localStorage.getItem('token');
    return token;
  }

  logout(){
    localStorage.clear();
  }
}

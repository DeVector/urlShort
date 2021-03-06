import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Credenciais } from '../models/Credenciais';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  creds: Credenciais = 
    {
      login: '',
      password: ''
    }

    login = new FormControl(null, Validators.email);
    password = new FormControl(null, Validators.minLength(3));
  

  constructor(
    private service: AuthService) { }

  ngOnInit(): void {
  }

  logar() {
    this.service.authenticate(this.creds);
  }

  validarCampos(): Boolean {
    return this.login.valid && this.password.valid;
  }

}

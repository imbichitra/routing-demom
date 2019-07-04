import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb : FormBuilder) { }

  ngOnInit() {
  }

  loginData = this.fb.group({
    'email':['',[Validators.required,Validators.email]],
    'password':['',[Validators.required, Validators.minLength(10)]]
  })

  get f(){
    return this.loginData.controls;
  }
}

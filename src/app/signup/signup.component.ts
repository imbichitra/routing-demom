import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private _auth: AuthService,private fb: FormBuilder) { }

  signUpData = this.fb.group({
    'email':['',[Validators.required,Validators.email]],
    'password':['',[Validators.required, Validators.minLength(10)]],
    'confirmPassword':['',[Validators.required, Validators.minLength(10)]]
  })


  get f(){
    return this.signUpData.controls;
  }

  signUp(){
    console.log(this.signUpData.value);
    this._auth.registerUser(this.signUpData.value)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

  ngOnInit() {
  }

}

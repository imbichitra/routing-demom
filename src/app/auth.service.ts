import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //private _registerUrl = "http://marketzoo.000webhostapp.com/demo123.php";
  private _registerUrl = "http://localhost:3000/products/1"
  constructor(private http:HttpClient) { }

  registerUser(user){
    return this.http.get<any>(this._registerUrl)
  }
}

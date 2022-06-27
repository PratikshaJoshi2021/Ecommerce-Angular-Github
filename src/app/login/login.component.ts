import { Component, OnInit } from '@angular/core';
import { UserData } from '../models/UserData';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 // userName:string='';
  //password:string='';
  loginUserData: UserData = new UserData();
  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }
  LoginUser(){
    this._auth.loginUser(this.loginUserData).subscribe(res => {
  })
}
}

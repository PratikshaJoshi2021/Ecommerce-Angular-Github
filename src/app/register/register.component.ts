import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //userName:string='';
  //password:string='';
  registerUserData: UserData = new UserData();
  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
  }
  registerUser() {
    this._auth.registerUser(this.registerUserData).subscribe(res => {
      //we will write code here
    },
      err => console.log(err));
}
}
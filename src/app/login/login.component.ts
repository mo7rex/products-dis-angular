import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiseService } from '../auth-servise.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  loginData : any={
    email:'',
    password:''
  }
  out:string=`Note: Use this email for log in: "john@mail.com" and this password: "changeme"`

  constructor(private auth:AuthServiseService){}

  onSubmit(){
    console.log(this.loginData)
    this.auth.getToken(this.loginData).subscribe(
      (result)=>{
        console.log(result)
        this.out="You are logged in"
      },
      (error)=>{
        console.log(error)
        this.out="the password or the email is wrong"
      }  
    )

  }
}

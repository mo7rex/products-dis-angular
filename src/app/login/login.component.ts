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

  constructor(private auth:AuthServiseService){}

  onSubmit(){
    console.log(this.loginData)
    this.auth.getToken(this.loginData).subscribe(
      (result)=>{
        console.log(result.id)
      },
      (error)=>{console.log(error)}  
    )

  }
}

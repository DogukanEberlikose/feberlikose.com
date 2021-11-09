import { ToastrService } from 'ngx-toastr';
import { loginModel } from './../../models/loginModel';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm:FormGroup;

  constructor(
    private formBuilder:FormBuilder, 
    private authService:AuthService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

    login(){
      if(this.loginForm.valid){
        let loginModel = Object.assign({},this.loginForm.value)

        this.authService.login(loginModel).subscribe(response=>{
          this.toastrService.success("Welcome!")
          localStorage.setItem("token",response.data.token)
        }, responseError=>{
          this.toastrService.error(responseError.error)
        })
      }
    }
  

}

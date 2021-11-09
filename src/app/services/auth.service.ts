import { HttpClient } from '@angular/common/http';
import { loginModel } from './../models/loginModel';
import { Injectable } from '@angular/core';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://localhost:44336/api/auth/';

  constructor(private httpClient:HttpClient) { }

  login(loginModel:loginModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login",loginModel)
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }
}

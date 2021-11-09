import { Customer } from './../models/customer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from '../models/responseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = 'https://localhost:44336/api/'

  constructor(private httpClient:HttpClient) { }


  add(customer:Customer):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"customers/add",customer)

  }
}

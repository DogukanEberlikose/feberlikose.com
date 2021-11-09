import { Product } from 'src/app/models/product';
import { SingleResponseModel } from './../models/singleResponseModel';
import { ProductDetailDto } from './../models/productDetailDto';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  apiUrl = 'https://localhost:44336/api/'

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<ListResponseModel<ProductDetailDto>>{
    let newPath = this.apiUrl + "products/getall"
    return this.httpClient.get<ListResponseModel<ProductDetailDto>>(newPath);
   }
   getProductsByCategory(categoryId:number):Observable<ListResponseModel<ProductDetailDto>>{
    let newPath = this.apiUrl + "products/getproductsbycategory?id=" + categoryId
    return this.httpClient.get<ListResponseModel<ProductDetailDto>>(newPath);
   }
   
   getProductDetailsByProductId(productId:number):Observable<ListResponseModel<ProductDetailDto>>{
    let newPath = this.apiUrl + "products/getproductdetails?id=" + productId
    return this.httpClient.get<ListResponseModel<ProductDetailDto>>(newPath);
   }
   add(product:Product):Observable<ResponseModel>{
     return this.httpClient.post<ResponseModel>(this.apiUrl+"products/add",product)

   }
}

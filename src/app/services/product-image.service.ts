import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductImage } from '../models/productImageModel';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from './../models/singleResponseModel';
import { ProductDetailDto } from './../models/productDetailDto';

@Injectable({
  providedIn: 'root'
})
export class ProductImageService {
  apiUrl = "https://localhost:44336/api/productimages/"

  constructor(private httpClient:HttpClient) { }
  getImages():Observable<ListResponseModel<ProductImage>> {
    return this.httpClient.get<ListResponseModel<ProductImage>>(this.apiUrl+"getall");
  }
  
  getImageByProductId(productId:number):Observable<ListResponseModel<ProductImage>>{
    let newPath = this.apiUrl +  productId
    return this.httpClient.get<ListResponseModel<ProductImage>>(newPath);
  }
}

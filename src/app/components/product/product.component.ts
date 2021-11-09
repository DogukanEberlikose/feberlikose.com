import { ProductDetailDto } from './../../models/productDetailDto';
import { ProductImageService } from './../../services/product-image.service';
import { ProductImage } from './../../models/productImageModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  filterText="";
  productImage: ProductImage[] = [];
  productDetail:ProductDetailDto[] = [];
  products:ProductDetailDto[] = [];
  productId: number;
  dataLoaded = false;
  


  constructor(
     private productService:ProductService,
     private activaredRoute:ActivatedRoute,
     ) { }

  ngOnInit(): void {
    this.activaredRoute.params.subscribe(params=>{
      const categoryId = params["categoryId"]
      if(categoryId){
        this.getProductsByCategory(categoryId)
      }else{
        this.getProducts()
      }
      
    })
  }

  getProducts(){
   this.productService.getProducts().subscribe(response=>{
     this.products = response.data
     this.dataLoaded = true;
   })
  }
  getProductsByCategory(categoryId:number){
    this.productService.getProductsByCategory(categoryId).subscribe(response=>{
      this.products = response.data
      this.dataLoaded = true;
    })
   }

   getImageUrl(product: ProductDetailDto){
     return `https://localhost:44336${product.imagePath}` 
   }

   
  
}

import { Component, OnInit } from '@angular/core';
import { ProductDetailDto } from 'src/app/models/productDetailDto';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
  
})
export class ProductDetailComponent implements OnInit {
  dataLoaded = false;
  products:ProductDetailDto[] = [];
  constructor(private productService:ProductService, private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['productId']) {
        
        this.getProductDetailsByProductId(params['productId']);
      }
    })

  };

  getProductDetailsByProductId(productId: number) {
    this.productService.getProductDetailsByProductId(productId).subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true;
      
    })
}
getImageUrl(product: ProductDetailDto){
  return `https://localhost:44336${product.imagePath}` 
}
}

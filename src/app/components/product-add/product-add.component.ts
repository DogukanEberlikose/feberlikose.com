import { Category } from 'src/app/models/category';
import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  categories:Category[];
  productAddForm : FormGroup;

  constructor(
    private formBuilder:FormBuilder, 
    private productService:ProductService, 
    private toastrService:ToastrService, 
    private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.createProductAddForm();
    this.setValues();
    
  }

  createProductAddForm(){
    this.productAddForm = this.formBuilder.group({
      productName:["",Validators.required],
      summaryDescription:["",Validators.required],
      description: ["",Validators.required],
      categoryId: ["",Validators.required],
    })

  }

  add(){
    if(this.productAddForm.valid){
      let productModel = Object.assign({},this.productAddForm.value) 
      productModel.categoryId= +productModel.categoryId;
      this.productService.add(productModel).subscribe(response=>{
        console.log(response)
        this.toastrService.success(response.message,"Başarılı")
        
      },responseError=>{
        console.log(responseError)
        this.toastrService.error(responseError.error)
      })
    }else{
      this.toastrService.error("Başarısız, Bilgileri lütfen kontrol ediniz!")

    }
    
    
  }
  setValues(){
    this.categoryService.getCategories().subscribe(response=>{
      this.categories=response.data})
    }
      
    
}

import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  customerAddForm : FormGroup;

  constructor( private toastrService:ToastrService, private formBuilder:FormBuilder, private customerService:CustomerService) { }

  ngOnInit(): void {
    this.createCustomerAddForm();
  }

  createCustomerAddForm(){
    this.customerAddForm = this.formBuilder.group({
      name:["",Validators.required],
      surname:["",Validators.required],
      email: ["", Validators.required],
      language: ["",Validators.required],
    })

  }

  add(){
    if(this.customerAddForm.valid){
      let customerModel = Object.assign({},this.customerAddForm.value) 
      
      this.customerService.add(customerModel).subscribe(response=>{
        
        this.toastrService.success(response.message,"Successful!")
        
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for (let i = 0; i < responseError.error.Errors.length; i++) {

            this.toastrService.error(responseError.error.Errors[i].ErrorMessage, "Validation Error")
          }
          
        }
        
      })
    }else{
      this.toastrService.error("Unsuccessful! Please check your information!")

    }
    
    
  }
  
}

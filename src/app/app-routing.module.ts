import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './components/login/login.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutComponent } from './components/about/about.component';
import { ProductComponent } from './components/product/product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './components/customer/customer.component';


const routes: Routes = [
  {path:"",pathMatch:"full", component:HomepageComponent},
  {path:"products", component:ProductComponent},
  {path:"about", component:AboutComponent},
  {path:"products/category/:categoryId", component:ProductComponent},
  {path:"products/productdetails/:productId", component:ProductDetailComponent},
  {path:"products/add", component:ProductAddComponent, canActivate:[LoginGuard]},
  {path:"login", component:LoginComponent},
  {path:"customers/getall", component:CustomerComponent, canActivate:[LoginGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

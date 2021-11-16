import { AuthService } from './../../services/auth.service';
import { Component, NgModule, OnInit } from '@angular/core';




@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
})

export class NaviComponent implements OnInit {
  isCollapsed=false;
  authenticated:boolean;
  
  constructor(private autService:AuthService,) {}

  ngOnInit(): void {
    this.isAuthenticated()
    
  }
  isAuthenticated(){
    if(
      this.autService.isAuthenticated()
    ){
      this.authenticated=true
    }else{
      this.authenticated=false
    }
  }
  
  
}

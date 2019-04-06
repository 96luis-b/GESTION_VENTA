import { Component, OnInit } from '@angular/core';
import { ProductProviderService } from '../../providers/product/product-provider.service';
import { RouterModule, Routes, Router } from '@angular/router';
import { AlertService } from '../../service/alert/alert.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

	public isSearchbarOpened = true;
	list = [
      {name_product:"loco"},
      {name_product:"loco"},
      {name_product:"loco"},
      {name_product:"loco"},
      {name_product:"loco"},
      {name_product:"loco"},
      {name_product:"loco"},
      {name_product:"loco"},
      {name_product:"loco"},
      {name_product:"loco"},
      {name_product:"loco"},
      {name_product:"loco"},
      {name_product:"loco"},
      {name_product:"loco"}
  ];
	items = [];
	text = "";
  products;
  constructor(public http: ProductProviderService,
              public router: Router,
              public alertService: AlertService) { 
   /*
     this.http.listProductAll().subscribe(data => {
        console.log(data);
        if(data.status >= 200 && data.status < 300){
          console.log(data);
          this.list = data.listProductAll;
          }
        },error => {
          this.alertService.presentAlert("Error de conexion","Intente mas tarde");
          console.log(error);
        });
  */
  }

  ngOnInit() {
  }

  onSearch(event){
	this.items = [];
  		
  	this.text = event.target.value.toUpperCase();

  
  for (let i = 0; i < this.list.length; i++) {
  		console.log(this.list[i].name_product);
    if (this.text) {

      if (this.list[i].name_product.toUpperCase().indexOf(this.text) > -1) {
       	this.items.push(this.list[i].name_product);
      } 
    }       
  }
  }

  cancel(){
   this.isSearchbarOpened = true;
  }
}

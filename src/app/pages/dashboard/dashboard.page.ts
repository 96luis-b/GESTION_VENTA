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
     /* {name_product:"loco",check:false},
      {name_product:"mama",check:false},
      {name_product:"papa",check:false},
      {name_product:"lol",check:false},
      {name_product:"tomate",check:false},
      {name_product:"papel",check:false},
      */
  ];
	items = [];
	text = "";
  products = [];
  
  constructor(public http: ProductProviderService,
              public router: Router,
              public alertService: AlertService) { 
   
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
       	this.items.push(this.list[i]);
      } 
    }       
  }
  }

  goToBasket(){
    console.log(this.products.length)
    if(this.products.length == 0){
      console.log("navegacion sin envio de parametos")
      this.router.navigateByUrl("/basket")
     }else{
      console.log("navegacion con envio de parametos")
      this.router.navigateByUrl(`/basket/${JSON.stringify(this.products)}`)
     }
  }

  selectProduct(product){
    console.log(product)
    if(product){
      for (var i = 0; i < this.products.length; i++) {
        if(product.name_product == this.products[i].name_product){
          this.products[i].check = false;
          this.products.splice(i,1);
          return;
        }
      }
      
      this.products.push(product);
        
    }
    console.log(this.products)
  }

}

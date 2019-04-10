import { Component, OnInit } from '@angular/core';
import { ProductProviderService } from '../../providers/product/product-provider.service';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../../service/alert/alert.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

products = [];

	listProduct = {
    "listProductAll": [
        {
            "id_product": 1,
            "quantity": 0,
            "name_product": "Monitor DELL de 21 pulgadas",
            "product_reser": 0,
            "price": 75000,
            "existence": 3,
            "available": 3,
            "state": true
        },
        {
            "id_product": 2,
            "quantity": 0,
            "name_product": "Leche en polvo extra calcio La Campestre",
            "product_reser": 0,
            "price": 75000,
            "existence": 4,
            "available": 4,
            "state": true
        }
    ],
    "message": "OK",
    "status": 200
}




  constructor(public http: ProductProviderService,
  			  public alertService: AlertService,
  			  public activeRoute: ActivatedRoute,
  			  public router: Router) {
  	//this.products = this.listProduct.listProductAll;
  	//console.log(this.products);
  	
     this.http.listProductAll().subscribe(data => {
        console.log(data);
        if(data.status >= 200 && data.status < 300){
          this.products = data.listProductAll;
          }
        },error => {
          this.alertService.presentAlert("Error de conexion","Intente mas tarde");
          console.log(error);
        });
     
  
   }

  ngOnInit() {
  }


  gotoProductDetails(product){
  	console.log(product);
        this.router.navigateByUrl(`/details-product/${JSON.stringify(product)}`);

  }


}

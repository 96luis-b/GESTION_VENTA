import { Component, OnInit } from '@angular/core';
import { ProductProviderService } from '../../providers/product/product-provider.service';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../../service/alert/alert.service';


@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.page.html',
  styleUrls: ['./details-product.page.scss'],
})
export class DetailsProductPage implements OnInit {

	product = {
		name_product: "",
		description: "",
		existence: 0,
		available: 0,
	}
	newProduct = true;
	id_product;
  constructor(public http: ProductProviderService,
  			  public alertService: AlertService,
  			  private activeRoute: ActivatedRoute) {
/*
  	let id_product;
  	this.http.getProduct(id_product).subscribe(data => {
        console.log(data);
        if(data.status >= 200 && data.status < 300){
         	this.product = data.product;
			newProduct = false;

          }
        },error => {
          this.alertService.presentAlert("Error de conexion","Intente mas tarde");
          console.log(error);
        });
  	*/
   }

  ngOnInit() {
  	this.id_product = JSON.parse(this.activeRoute.snapshot.paramMap.get("id"));
  }

}

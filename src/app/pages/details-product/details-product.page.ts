import { Component, OnInit } from '@angular/core';
import { ProductProviderService } from '../../providers/product/product-provider.service';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../../service/alert/alert.service';
import { InspectTxtService } from '../../service/inspectTxt/inspect-txt.service';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.page.html',
  styleUrls: ['./details-product.page.scss'],
})
export class DetailsProductPage implements OnInit {

	product = {
    id_product:null,
		name_product: "",
		price: null,
		existence: null,
		available: null,
	}
	newProduct = true;
	id_product;
  valueButton = "Guardar Producto"
  constructor(public http: ProductProviderService,
  			      public alertService: AlertService,
  			      private activeRoute: ActivatedRoute,
              public inspectTxt: InspectTxtService,
              private router: Router) {}

  ngOnInit() {

    this.id_product = this.activeRoute.snapshot.paramMap.get("id");
    console.log(this.id_product)
    if(this.id_product != 0){
      this.http.getProduct(this.id_product).subscribe(data=>{
        if(data.status >= 200 && data.status < 300){
          this.product = data.product;
          console.log(this.product)
          this.newProduct = false;
          this.valueButton = "Actualizar Producto"
        }
      },error=>{
          this.alertService.presentAlert("Error de conexion","Intente mas tarde");
          console.log(error);
      })
    }else{
      this.valueButton = "Guardar Producto"
      return;
    }
    
  }



  saveProduct(){
    if(this.id_product > 0){
      console.log("se actualizara el producto")
        if(this.inspectTxt.notNullValueDetailsProduct(this.product)){
        return;
        }
        this.http.updateProduct(this.product).subscribe(data=>{
          if(data.status >= 200 && data.status < 300){
            this.alertService.presentAlert(data.message,"OK");
            this.router.navigateByUrl("/menu/product");
          }
        },error=>{
            this.alertService.presentAlert("Error de conexion","Intente mas tarde");
            console.log(error);
        })
      
     }
    else{
      console.log("se agregara un nuevo producto")
      
      if(this.inspectTxt.notNullValueDetailsProduct(this.product)){
        return;
      }
      this.http.createProduct(this.product).subscribe(data=>{
        if(data.status >= 200 && data.status < 300){
          this.alertService.presentAlert(data.message,"OK");
          this.router.navigateByUrl("/menu/product");
        }
      },error=>{
          this.alertService.presentAlert("Error de conexion","Intente mas tarde");
          console.log(error);
      })
        
        
      return;
    }
  }

  deleteProduct(){
     this.http.deleteProduct(this.product).subscribe(data=>{
          if(data.status >= 200 && data.status < 300){
            this.alertService.presentAlert(data.message,"OK");
            this.router.navigateByUrl("/menu/product");
          }
        },error=>{
            this.alertService.presentAlert("Error de conexion","Intente mas tarde");
            console.log(error);
        })
  }


}

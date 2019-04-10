import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../../service/alert/alert.service';
import { TotalService } from '../../service/total/total.service';
import { BillProviderService } from '../../providers/bill/bill-provider.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.page.html',
  styleUrls: ['./basket.page.scss'],
})
export class BasketPage implements OnInit {

	basket ;
	parametro;
	bill = {
		basket:[],
		sold_items:0,
		total:0
	}


  constructor(private activeRoute: ActivatedRoute,
  			  public alertService: AlertService,
  			  public total: TotalService,
  			  public http: BillProviderService,
  			  private router: Router) { }

  ngOnInit() {
  
    this.basket = JSON.parse(this.activeRoute.snapshot.paramMap.get("basket"));
    console.log(this.basket)
    if(this.basket == null){
    	return;
    }
    
    for (var i = 0; i < this.basket.length; i++) {
    	this.basket[i].quantity = 1;
    	this.basket[i].available = this.basket[i].available - 1;
    	this.basket[i].existence = this.basket[i].existence - 1;
    	this.bill.total = this.bill.total + this.basket[i].price;
    	this.bill.sold_items = this.bill.sold_items + 1;
    }
    console.log(this.basket)
    
  }


more(product){
	let total = this.total.more(product,this.bill.total)
	console.log(total.product);
	if(total.checkup){
		for (var i = 0; i < this.basket.length; i++) {
			if(total.product.id_product == this.basket[i].id_product){
				this.basket.splice(i,1,product);
			}
		}
		this.bill.sold_items = this.bill.sold_items + 1;
		this.bill.total = total.total;
	}
}


less(product){
	let total = this.total.less(product,this.bill.total);
	console.log(total.product);
	if(total.checkup){
		for (var i = 0; i < this.basket.length; i++) {
			if(total.product.id_product == this.basket[i].id_product){
				this.basket.splice(i,1,product);
			}
		}
		this.bill.sold_items = this.bill.sold_items - 1;
		this.bill.total = total.total;
	}
}

confirmation(){
	this.alertService.presentAlert("Confirmar", "OK");
    this.router.navigateByUrl("/menu/tabs")

/*
	this.bill.basket = this.basket;
	console.log(this.bill)
	  this.http.toSale(this.bill).subscribe(data=>{
          if(data.status >= 200 && data.status < 300){
            this.alertService.presentAlert("","OK");
            this.router.navigateByUrl("/menu/tabs")
          }
        },error=>{
            this.alertService.presentAlert("Error de conexion","Intente mas tarde");
            console.log(error);
        })
	  */
}


}

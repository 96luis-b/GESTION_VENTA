import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TotalService {

  constructor() { }

  more(product,total){
	if (product.available != 0 && product.available > -1) {
		product.quantity = product.quantity + 1;
		product.available = product.available -1;
		product.existence = product.existence -1;
		total = total + product.price;
		return {product:product, checkup:true, total:total}
	}else{
		return {checkup:false}
	}
  	
  }

  less(product,total){
	if(product.quantity > 1){
		product.quantity = product.quantity - 1;
		product.available = product.available + 1;
		product.existence = product.existence + 1;
		total = total - product.price;
		return {product:product, checkup:true, total:total} 
	}else{
		return {checkup:false}
	}
  		}
  

}

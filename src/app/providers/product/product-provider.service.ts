import { Injectable } from '@angular/core';
import { Observable, of, throwError, forkJoin } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ProductProviderService {
url = "http://localhost:8080/GESTION_VENTA/";
  constructor(public http: HttpClient) {  }

//este metodo solo sera a modo de prueba
	listProductAll():Observable<any>{
	return this.http.post(`${this.url}ListProductAll`, {}, {headers: {'Content-Type': 'application/json'}});
 	}

	getProduct(id_product):Observable<any>{
	return this.http.post(`${this.url}GetProduct`, id_product, {headers: {'Content-Type': 'application/json'}});
  	}

  	createProduct(product):Observable<any>{
  		return this.http.post(`${this.url}CreateProduct`, product, {headers:{'Content-Type':'application/json'}})
  	}

  	updateProduct(product):Observable<any>{
  		return this.http.post(`${this.url}UpdateProduct`, product, {headers:{'Content-Type':'application/json'}})
  	}

  	deleteProduct(product):Observable<any>{
  		return this.http.post(`${this.url}DeleteProduct`, product, {headers:{'Content-Type':'application/json'}})
  	}

}

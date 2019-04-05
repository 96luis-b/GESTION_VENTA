import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { Component } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardProviderService {
url = "http://localhost:8080/GESTION_VENTA/"; 

  constructor(public http: HttpClient) { 
    console.log('Hello HttpProvider Provider');

  }


  listProductAll():Observable<any>{
	return this.http.post(`${this.url}/ListProductAll`, {}, {headers: {'Content-Type': 'application/json'}});
  }
}

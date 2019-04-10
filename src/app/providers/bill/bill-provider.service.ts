import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { Component } from '@angular/core';
import { ServerPointService } from '../../providers/serverPoint/server-point.service'


@Injectable({
  providedIn: 'root'
})
export class BillProviderService {

	url;
  constructor(private http: HttpClient,
  			  public serverPoint: ServerPointService) { 
    this.url = serverPoint.point();
  }

toSale(bill):Observable<any>{
	return this.http.post(`${this.url}ToSale`, bill, {headers: {'Content-Type': 'application/json'}});
  }

}

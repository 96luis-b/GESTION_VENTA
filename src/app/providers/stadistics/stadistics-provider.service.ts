import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { Component } from '@angular/core';
import { ServerPointService } from '../../providers/serverPoint/server-point.service'


@Injectable({
  providedIn: 'root'
})
export class StadisticsProviderService {
	url;
  constructor(public http: HttpClient,
  			  public serverPoint: ServerPointService) { 
    this.url = serverPoint.point();
  }

  salePeakForInterval(data):Observable<any>{
	return this.http.post(`${this.url}SalePeakForInterval`, data, {headers: {'Content-Type': 'application/json'}});
  }

  salePeak(data):Observable<any>{
	return this.http.post(`${this.url}SalePeak`, data, {headers: {'Content-Type': 'application/json'}});
  }

}

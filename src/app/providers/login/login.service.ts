import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { Component } from '@angular/core';
import { ServerPointService } from '../../providers/serverPoint/server-point.service'



@Injectable({
  providedIn: 'root'
})
export class LoginService {
	url;
  constructor(public http: HttpClient,
  			      public serverPoint: ServerPointService) { 
    console.log('Hello HttpProvider Provider');
    this.url = serverPoint.point();
  }


  login(user):Observable<any>{
	return this.http.post(`${this.url}Login`, user, {headers: {'Content-Type': 'application/json'}});
  }

}

import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { Component } from '@angular/core';
import { ServerPointService } from '../../providers/serverPoint/server-point.service'



@Injectable({
  providedIn: 'root'
})
export class SignupService {
	url;
  constructor(public http: HttpClient,
  			  public serverPoint: ServerPointService) { 
    this.url = serverPoint.point();
  }


signup(user):Observable<any>{
	return this.http.post(`${this.url}Signup`, user, {headers: {'Content-Type': 'application/json'}});
  }

}

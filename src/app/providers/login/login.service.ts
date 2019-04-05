import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { Component } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
	url = "http://localhost:8080/GESTION_VENTA/"; 

//el problema es que no se a añadido el componente HttpClient en el app.module
// por ende al llamarlo como parametron del constructor, me sale un error
  constructor() { 
    console.log('Hello HttpProvider Provider');

  }

/*
  login(user):Observable<any>{
	return this.http.post(`${this.url}/Login`, user, {headers: {'Content-Type': 'application/json'}});
  }
*/
}

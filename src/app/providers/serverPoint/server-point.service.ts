import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerPointService {

  constructor() { }

  point(){
  	return "http://localhost:8080/GESTION_VENTA/";
  }
}

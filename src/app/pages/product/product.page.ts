import { Component, OnInit } from '@angular/core';
import {  } from '../../providers/dashboard/dashboard-provider.service';
import { RouterModule, Routes, Router } from '@angular/router';
import { AlertService } from '../../service/alert/alert.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

product = [
      {name_product:"loco"},
      {name_product:"loco"},
      {name_product:"loco"},
      {name_product:"loco"},
      {name_product:"loco"},
      {name_product:"loco"},
      {name_product:"loco"},
      {name_product:"loco"},
      {name_product:"loco"},
      {name_product:"loco"},
      {name_product:"loco"},
      {name_product:"loco"},
      {name_product:"loco"},
      {name_product:"loco"}
  ];

  constructor() {
  	 /*
     this.http.listProductAll().subscribe(data => {
        console.log(data);
        if(data.status >= 200 && data.status < 300){
          console.log(data);
          this.list = data.listProductAll;
          }
        },error => {
          this.alertService.presentAlert("Error de conexion","Intente mas tarde");
          console.log(error);
        });
  */
   }

  ngOnInit() {
  }

}

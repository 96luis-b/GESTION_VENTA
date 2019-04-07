import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../../service/alert/alert.service';
import { InspectTxtService } from '../../service/inspectTxt/inspect-txt.service';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.page.html',
  styleUrls: ['./basket.page.scss'],
})
export class BasketPage implements OnInit {

	basket = [
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
	parametro;

  constructor(private activeRoute: ActivatedRoute,
  			  public alertService: AlertService
  			  ) { }

  ngOnInit() {
    //this.basket = JSON.parse(this.activeRoute.snapshot.paramMap.get("basket"));
    this.parametro = this.activeRoute.snapshot.paramMap.get("basket");
    console.log(this.basket)
  }

}

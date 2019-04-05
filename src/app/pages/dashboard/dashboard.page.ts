import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

	public isSearchbarOpened = true;
	list = [
		{product:"loco"},
		{product:"tomate"},
		{product:"papa"},
		{product:"pepsicola"}, 
		{product:"cocacola"},
		{product:"arroz"}
	]
	items = [];
	text = "";
  constructor() { 
    
  }

  ngOnInit() {
  }

  onSearch(event){
	this.items = [];
  		
  	this.text = event.target.value.toUpperCase();

  
  for (let i = 0; i < this.list.length; i++) {
  		console.log(this.list[i].product);
    if (this.text) {

      if (this.list[i].product.toUpperCase().indexOf(this.text) > -1) {
       	this.items.push(this.list[i].product);
      } 
    }       
  }
  }

  cancel(){
   this.isSearchbarOpened = true;
  }
}

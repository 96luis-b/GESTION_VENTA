import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { DatabaseService } from '../service/datab'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	user = {
		name:"",
		lastname:"",
		identification: null
	}

  constructor(public router:Router){
  	
  }

	saveData(){

	}

	getAllUser(){

	}
}

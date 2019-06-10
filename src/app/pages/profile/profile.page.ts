import { Component, OnInit } from '@angular/core';
import { StadisticsServiceService } from '../../service/stadistics/stadistics-service.service';
import { BillProviderService } from '../../providers/bill/bill-provider.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  json = {
	username:"",
	data:{
		startDate:"",
		endDate:""
	}
  }

  package = {
		dateStart:[],
		dateEnd:[],
		periodo:0,
		state:false		
  }

  constructor(public stadisticService: StadisticsServiceService,
  			  public http: BillProviderService) {

   }

  ngOnInit() {
  }


	today(){

	}

	afterWeek(){
		let data = this.package;  
		console.log(data)
		data.periodo = 7;
		let paquete = this.stadisticService.afterWeek(data);
		console.log(paquete);
		this.json.data.startDate = paquete.dateStart[0];
		this.json.data.endDate = paquete.dateEnd[6];
		this.http.toSale(paquete).subscribe(data => {
        	console.log(data);
        	if(data.status >= 200 && data.status < 300){
	  			/*
	  			*	instancia de metodo para la cración de la grafica	
	  			*/
	  		}
        },error => {
         	console.log(error);
        });
	}


	twoAfterWeek(){
		let data = this.package;
		this.package.periodo = 14;
		let paquete = this.stadisticService.afterWeek(data);
		this.json.data.startDate = paquete.dateStart[0];
		this.json.data.endDate = paquete.dateEnd[13];
		this.http.toSale(paquete).subscribe(data => {
        	console.log(data);
        	if(data.status >= 200 && data.status < 300){
	  			/*
	  			*	instancia de metodo para la cración de la grafica	
	  			*/
	  		}
        },error => {
         	console.log(error);
        });
	}

	afterMonth(){
		let data = this.package;
		let paquete = this.stadisticService.crateIntervalDateAfterMonth(data);
		this.json.data.startDate = paquete.dateStart[0];
		this.json.data.endDate = paquete.dateEnd[0];
		this.http.toSale(paquete).subscribe(data => {
        	console.log(data);
        	if(data.status >= 200 && data.status < 300){
	  			/*
	  			*	instancia de metodo para la cración de la grafica	
	  			*/	
	  		}
        },error => {
         	console.log(error);
        });
	}
	afteryear(){
		let data = this.package;
		data.dateStart.push((this.stadisticService.year)-1);
		this.http.toSale(data).subscribe(data => {
        	console.log(data);
        	if(data.status >= 200 && data.status < 300){
	  			/*
	  			*	instancia de metodo para la cración de la grafica	
	  			*/
	  		}
        },error => {
         	console.log(error);
        });
	}


}

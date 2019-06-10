import { Component, OnInit } from '@angular/core';

import { StadisticsServiceService } from '../../service/stadistics/stadistics-service.service';
import { StadisticsProviderService } from '../../providers/stadistics/stadistics-provider.service';

@Component({
  selector: 'app-stadistics',
  templateUrl: './stadistics.page.html',
  styleUrls: ['./stadistics.page.scss'],
})
export class StadisticsPage implements OnInit {

	package = {
		dateStart:[],
		dateEnd:[],
		periodo:0,
		state:false		
	}

  constructor(public stadisticService: StadisticsServiceService,
  		      public http: StadisticsProviderService) { }

  ngOnInit() {}

	today(){

	}

	afterWeek(){
		//se copia con la caracteristica que, al modificar la variable "data", tambien se modifica la varible "package"
		let data = this.package;  
		console.log(data)
		data.periodo = 7;
		let paquete = this.stadisticService.afterWeek(data);
		console.log(paquete);
		
		/*this.http.salePeakForInterval(paquete).subscribe(data => {
        	console.log(data);
        	if(data.status >= 200 && data.status < 300){
	  			/*
	  			*	instancia de metodo para la cración de la grafica	
	  			
	  		}
        },error => {
         	console.log(error);
        });
        */
	}
	twoAfterWeek(){
		let data = this.package;
		this.package.periodo = 14;
		let paquete = this.stadisticService.afterWeek(data);
		this.http.salePeakForInterval(paquete).subscribe(data => {
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
		this.http.salePeakForInterval(paquete).subscribe(data => {
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
		this.http.salePeakForInterval(data).subscribe(data => {
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

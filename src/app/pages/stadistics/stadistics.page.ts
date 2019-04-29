import { Component, OnInit } from '@angular/core';

import { StadisticsServiceService } from '../../service/stadistics/stadistics-service.service';
import { StadisticsProviderService } from '../../providers/stadistics/stadistics-provider.service';

@Component({
  selector: 'app-stadistics',
  templateUrl: './stadistics.page.html',
  styleUrls: ['./stadistics.page.scss'],
})
export class StadisticsPage implements OnInit {

	data = {
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
		this.data.periodo = 7;
		this.stadisticService.afterWeek(this.data);
	}
	twoAfterWeek(){

	}
	afterMonth(){

	}
	afteryear(){

	}

}

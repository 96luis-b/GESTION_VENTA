import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StadisticsServiceService {

	date;
	day;
	month;
	year;
  dayWeek;
  constructor() 
  { 
  	this.date = new Date();
    this.day = this.date.getDate();
    this.month = this.date.getMonth() + 1;
    this.year = this.date.getFullYear();
    this.dayWeek = this.date.getDay() + 1;

    console.log(this.date);
    console.log(this.day);
    console.log(this.month);
    console.log(this.year);
    console.log(this.dayWeek);

  }

  afterWeek(data){
    let periodo = data.periodo;

  	while(periodo>0) {

      periodo = periodo - 1
  	}
    return data;
  }



  createIntervalDate(data){
    let periodo = data.periodo;
    
    if(this.day >= (periodo+1)){
      data.dateStart.push(`${this.year}-${this.month}-${(this.day-periodo)}`)
      console.log(data.dateStart);
    }else{
      if()
    }
  }


}

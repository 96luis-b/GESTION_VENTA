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
  afterMonth;
  afterYear;
  initiality = 0;
  constructor() 
  { 
  	this.date = new Date();
    this.day = this.date.getDate();
    this.month = this.date.getMonth() + 1;
    this.year = this.date.getFullYear();
    this.dayWeek = this.date.getDay() + 1;
    if(this.month == 1){
      this.afterMonth = 12;
      this.afterYear = this.year - 1; 
    }else{
      this.afterMonth = this.date.getMonth();
      this.afterYear = this.year;
    }

    console.log(this.date);
    console.log(this.day);
    console.log(this.month);
    console.log(this.year);
    console.log(this.dayWeek);
    console.log(this.afterMonth);

  }

  afterWeek(data){
    let periodo = data.periodo;

  	while(periodo>0) {
      this.createIntervalDateAfterWeek(data, periodo);
      periodo = periodo - 1
  	}
    this.initiality = 0;
    return data;
  }

  crateIntervalDateAfterMonth(data){
    let daysLastMonth = new Date(this.afterYear, this.afterMonth, 0).getDate();
    for(let i=1;i<=daysLastMonth;i++){
      data.dateStart.push(`${this.year}-${this.month}-${(i)}`);
      if((i+1)>daysLastMonth){
        if(this.month+1>12){
          data.dateEnd.push(`${(this.year+1)}-1-1`);
        }
        data.dateEnd.push(`${(this.year)}-${(this.month+1)}-1`);
      }else{
        data.dateEnd.push(`${(this.year)}-${(this.month)}-${(i+1)}`);
      }
    }
    return data;
  }

crateIntervalDateAfterMonthForBill(data){
    let daysLastMonth = new Date(this.afterYear, this.afterMonth, 0).getDate();
    for(let i=1;i<=daysLastMonth;i++){
      if(i==1){
        data.dateStart.push(`${this.year}-${this.month}-${(i)}`);
      }
      
      if(i==daysLastMonth){
        if((i+1)>daysLastMonth){
          if(this.month+1>12){
            data.dateEnd.push(`${(this.year+1)}-1-1`);
          }
          data.dateEnd.push(`${(this.year)}-${(this.month+1)}-1`);
        }
        else{
          data.dateEnd.push(`${(this.year)}-${(this.month)}-${(i+1)}`);
        }
      }

    }
    return data;
  }


  createIntervalDateAfterWeek(data, periodo){
    if(this.day >= (periodo+1)){
      data.dateStart.push(`${this.year}-${this.month}-${(this.day-periodo)}`);
      data.dateEnd.push(`${this.year}-${this.month}-${(this.day+1-periodo)}`);
      return data;
    }
    else{
        if(this.month==1){
            let endYear, endMonth, endDay, endDate,
            startYear = this.year-1 ,
            startMonth = 12,
            daysLastMonth = new Date(startYear, startMonth, 0).getDate(), //devuelve dias del mes solo con el año y el mes
            startDay = daysLastMonth + this.day - periodo,
            startDate = `${startYear}-${startMonth}-${startDay}`;
            data.dateStart.push(startDate);
            if((startDay+1)>daysLastMonth){
              if(startMonth+1>12){
                 endMonth = 1;
              }
              else{
                 endMonth = startMonth+1;
              }
              this.initiality++;
              endYear = startYear+1;
              endDay = this.initiality; // para el caso de que el periodo sea 1 y la fecha actual sea 1/1/xxxx
              endDate = `${endYear}-${endMonth}-${endDay}`;
              data.dateEnd.push(endDate);
              return data;
            }
            else{
              endYear = startYear;
              endMonth = startMonth;
              endDay = daysLastMonth + this.day + 1 - periodo;
              endDate = `${endYear}-${endMonth}-${endDay}`;
              data.dateEnd.push(endDate);
              return data;
            }
        }
        else{
          /*
          *
          */
           
            let endYear = this.year, endMonth, endDay, endDate,
            startYear = this.year,
            startMonth = this.month-1,
            daysLastMonth = new Date(startYear, startMonth, 0).getDate(), //devuelve dias del mes solo con el año y el mes
            startDay = daysLastMonth + this.day - periodo,
            startDate = `${startYear}-${startMonth}-${startDay}`;
            data.dateStart.push(startDate);
            if((startDay+1)>daysLastMonth){
              this.initiality++;
              endMonth = startMonth+1;
              endDay = this.initiality;
              endDate = `${endYear}-${endMonth}-${endDay}`;
              data.dateEnd.push(endDate);
              return data;
            }
            else{
              endYear = startYear;
              endMonth = startMonth;
              endDay = daysLastMonth + this.day + 1 - periodo;
              endDate = `${endYear}-${endMonth}-${endDay}`;
              data.dateEnd.push(endDate);
              return data;
            }

            /*
            *
            */
        }
    }
  }


}

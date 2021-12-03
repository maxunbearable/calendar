import { Component } from '@angular/core';
import * as moment from 'moment';
import {PopoutComponent} from './popout/popout.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'event-calendar 2021';

  months = [1,2,3,4,5,6,7,8,9,10,11,12]


   getDaysArrayByMonth(month: number) {
    const year = 2021;
    let daysInMonth = moment(`${year}-${month}`).daysInMonth();
    console.log(daysInMonth)
    let arrDays = [];
    let monthNaming = moment(`${year}-${month}`).format("MMM")


    while(daysInMonth) {
      let current = moment(`${year}-${month}`).date(daysInMonth).format('L');
      let dayOfWeek = moment(current).day();
      let dayOfMonth = moment(current).format("DD");
      let monthName = moment(`${year}-${month}`).format("MMM")
      arrDays.push({ monthNaming, month:monthName, day:dayOfMonth, date: current, isweekend: dayOfWeek === 0 || dayOfWeek === 6? true : false  });
      daysInMonth--;

    }
    return arrDays.reverse();
  }

  popoutView = false;
cellClick(){
  this.popoutView = true;
}


   monthList = this.months.map((month: number) => {

     return this.getDaysArrayByMonth(month);

   });








 /* 1) moment for each month days
  data = [
    DecArray,
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ] */
}

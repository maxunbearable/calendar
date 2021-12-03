import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import * as moment from 'moment';
import { interval, timer, fromEvent } from 'rxjs';




@Component({
  selector: 'app-popout',
  templateUrl: './popout.component.html',
  styleUrls: ['./popout.component.scss']
})
export class PopoutComponent implements OnInit {
  startValue:any = '';
  endValue:any = '';
  typeOfAbsenceValue:any = '';
  numOfDaysFromStart: any = '';
  numOfDaysToEnd: any = '';
  timeSpan = new FormGroup({
  startDate : new FormControl(''),
  endDate : new FormControl(''),
  typeOfAbsence: new FormControl('')

  })

  constructor() { }


  popoutView = true;

  cancelClick(){
    this.popoutView = false;
  }
  requestClick(){
    this.startValue = moment(this.timeSpan.value.startDate).format("L");
    this.endValue = moment(this.timeSpan.value.endDate).format("L");
    this.typeOfAbsenceValue = this.timeSpan.value.typeOfAbsence;
    console.log(this.startValue, this.endValue, this.typeOfAbsenceValue)
  }


  ngOnInit(): void {
/*
    let interval$ = timer(3000, 1000);
    interval$.subscribe(val => console.log("stream 1 => "+val));
    const  click$ = fromEvent(document, 'click');
    click$.subscribe(evt => console.log(evt)); */

  }

}

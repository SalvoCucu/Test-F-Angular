import { Component, OnInit } from '@angular/core';
import { Activity } from '../models/Activity';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  activityA:Activity[]=[]

  constructor() { }

  ngOnInit(): void {
  }

  saved(data: Activity){
    this.activityA.push(data)
    
  }
}

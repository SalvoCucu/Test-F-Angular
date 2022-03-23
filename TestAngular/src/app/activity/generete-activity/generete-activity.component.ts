import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Activity } from 'src/app/models/Activity';

@Component({
  selector: 'app-generete-activity',
  templateUrl: './generete-activity.component.html',
  styleUrls: ['./generete-activity.component.css']
})
export class GenereteActivityComponent implements OnInit {
@Output() dataActivity = new EventEmitter<Activity>()

  currentActivity: Activity = {
    activity: "",
    type: "",
    partecipants: 0,
    price: 0,
    link: "",
    key: "",
    accessibility:0
  }

  status:boolean= false

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  genereteActivity(){
    this.http.get<Activity>('https://www.boredapi.com/api/activity/').subscribe((data)=>{
    this.currentActivity=data;
    this.status=true})
  }

  saveActivity(){
    this.dataActivity.emit(this.currentActivity)
  }
}

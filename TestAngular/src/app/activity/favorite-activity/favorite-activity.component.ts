import { Component, Input, OnInit } from '@angular/core';
import { Activity } from 'src/app/models/Activity';

@Component({
  selector: 'app-favorite-activity',
  templateUrl: './favorite-activity.component.html',
  styleUrls: ['./favorite-activity.component.css']
})
export class FavoriteActivityComponent implements OnInit {
  @Input() activityA:Activity[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

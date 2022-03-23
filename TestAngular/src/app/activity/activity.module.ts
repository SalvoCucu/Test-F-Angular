import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenereteActivityComponent } from './generete-activity/generete-activity.component';
import { FavoriteActivityComponent } from './favorite-activity/favorite-activity.component';
import { HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    GenereteActivityComponent,
    FavoriteActivityComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],

  exports:[
    GenereteActivityComponent,
    FavoriteActivityComponent
  ]
  
})
export class ActivityModule { }

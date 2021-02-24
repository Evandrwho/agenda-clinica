import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import { DateUtilComponent } from './date-util/date-util.component';



@NgModule({
  declarations: [DialogComponent, DateUtilComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DialogComponent, DateUtilComponent
  ]
})
export class SharedModule { }

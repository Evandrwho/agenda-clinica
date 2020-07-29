import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuComponent} from './menu/menu.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HomeComponent} from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {AgendaModule} from '../agenda/agenda.module';



@NgModule({
  declarations: [
    MenuComponent,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    AgendaModule,
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    HomeComponent,
    MenuComponent
  ]
})
export class CoreModule { }

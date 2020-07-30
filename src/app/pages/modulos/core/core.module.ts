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
import {RouterModule} from '@angular/router';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import {MatDialogModule} from '@angular/material/dialog';
import {SharedModule} from '../shared/shared.module';
import { DialogAgendaConsultaComponent } from './tela-inicial/dialog-agenda-consulta/dialog-agenda-consulta.component';



@NgModule({
  declarations: [
    MenuComponent,
    DashboardComponent,
    HomeComponent,
    TelaInicialComponent,
    DialogAgendaConsultaComponent
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
    RouterModule,
    MatDialogModule,
    SharedModule
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
    MenuComponent,
    TelaInicialComponent,
    MatDialogModule,
    DialogAgendaConsultaComponent
  ]
})
export class CoreModule { }

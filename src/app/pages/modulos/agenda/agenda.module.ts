import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarioAgendaComponent } from './calendario-agenda/calendario-agenda.component';
import { CadastroConsultaComponent } from './cadastro-consulta/cadastro-consulta.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BsDatepickerModule, BsLocaleService} from 'ngx-bootstrap/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { defineLocale } from 'ngx-bootstrap/chronos';
defineLocale('pt-br', ptBrLocale);

import { ptBrLocale } from 'ngx-bootstrap/locale';
import { AgendaComponent } from './agenda/agenda.component';
import { ListaEventosDiaComponent } from './lista-eventos-dia/lista-eventos-dia.component';
import {MatTableModule} from '@angular/material/table';
import {FullCalendarModule, ScrollPanelModule, TableModule, VirtualScrollerModule} from 'primeng';
import {MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
  declarations: [CalendarioAgendaComponent, CadastroConsultaComponent, AgendaComponent],
  exports: [
    CalendarioAgendaComponent,
    CadastroConsultaComponent,
    AgendaComponent,
    FullCalendarModule,
    ReactiveFormsModule,
    BsDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,

  ],
  imports: [
    CommonModule,
    FullCalendarModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    TableModule,
    MatPaginatorModule,
    VirtualScrollerModule,
    ScrollPanelModule
  ],
  providers: [
    BsLocaleService]
})
export class AgendaModule { }

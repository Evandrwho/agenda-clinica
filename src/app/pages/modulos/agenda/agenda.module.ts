import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarioAgendaComponent } from './calendario-agenda/calendario-agenda.component';
import {FullCalendarModule} from '@fullcalendar/angular';
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
    MatButtonModule

  ],
  imports: [
    CommonModule,
    FullCalendarModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    BsLocaleService]
})
export class AgendaModule { }

import { Component, OnInit } from '@angular/core';
import {CalendarOptions} from '@fullcalendar/angular';

@Component({
  selector: 'app-calendario-agenda',
  templateUrl: './calendario-agenda.component.html',
  styleUrls: ['./calendario-agenda.component.css']
})
export class CalendarioAgendaComponent implements OnInit {

  calendarOptions: CalendarOptions = {
    locale: 'pt-br',
    initialView: 'dayGridMonth',
    themeSystem: 'bootstrap',
    handleWindowResize: true,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: ''
    },
  };

  constructor() { }

  ngOnInit(): void {
  }

}

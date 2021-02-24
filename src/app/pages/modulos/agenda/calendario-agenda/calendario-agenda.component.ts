import {AfterContentChecked, Component, Inject, LOCALE_ID, OnInit, ViewChild} from '@angular/core';
import {CalendarOptions} from '@fullcalendar/angular';
import {
  CalendarView,
  CalendarDateFormatter,
  DateAdapter, CalendarMonthViewComponent, CalendarViewPeriod
} from 'angular-calendar';
import {
  addPeriod,
  CalendarSchedulerEvent, CalendarSchedulerEventAction,
  CalendarSchedulerViewComponent,
  DAYS_IN_WEEK, endOfPeriod, SchedulerDateFormatter, SchedulerEventTimesChangedEvent,
  SchedulerViewDay,
  SchedulerViewHour, SchedulerViewHourSegment, startOfPeriod, subPeriod
} from 'angular-calendar-scheduler';
import {addMonths, endOfDay} from 'date-fns';
import {Subject} from 'rxjs';
import {DialogAgendaConsultaComponent} from '../../core/tela-inicial/dialog-agenda-consulta/dialog-agenda-consulta.component';
import {MatDialog} from '@angular/material/dialog';
import {CalendarSchedulerEventComponent} from 'angular-calendar-scheduler/modules/scheduler/calendar-scheduler-event.component';
import {EventColor} from 'calendar-utils';
import {CalendarSchedulerEventStatus} from 'angular-calendar-scheduler/modules/scheduler/models/calendar-scheduler-event.model';
import {CalendarioEvento} from './model/CalendarShedulerEvent';

@Component({
  selector: 'app-calendario-agenda',
  templateUrl: './calendario-agenda.component.html',
  styleUrls: ['./calendario-agenda.component.css'],
  providers: [{
    provide: CalendarDateFormatter,
    useClass: SchedulerDateFormatter
  }]
})
export class CalendarioAgendaComponent implements OnInit, AfterContentChecked {
  CalendarView = CalendarView;
  view: CalendarView = CalendarView.Week;
  viewDate: Date = new Date();
  viewDays: number = DAYS_IN_WEEK;
  refresh: Subject<any> = new Subject();
  reload = true;
  locale = 'ept-BR';
  hourSegments = 2;
  weekStartsOn = 1;
  startsWithToday = true;
  activeDayIsOpen = true;
  excludeDays: number[] = []; // [0];
  weekendDays: number[] = [0, 6];
  dayStartHour = 6;
  dayEndHour = 22;
  minDate: Date = new Date();
  maxDate: Date = endOfDay(addMonths(new Date(), 1));
  // tslint:disable-next-line:ban-types
  dayModifier: Function;
  // tslint:disable-next-line:ban-types
  hourModifier: Function;
  // tslint:disable-next-line:ban-types
  segmentModifier: Function;
  // tslint:disable-next-line:ban-types
  eventModifier: Function;

  prevBtnDisabled = false;
  nextBtnDisabled = false;

  actions: CalendarSchedulerEventAction[] = [
    {
      when: 'enabled',
      label: '<span class="valign-center"><i class="material-icons md-18 md-red-500">cancel</i></span>',
      title: 'Delete',
      onClick: (event: CalendarSchedulerEvent): void => {
        console.log('Pressed action \'Delete\' on event ' + event.id);
      }
    },
    {
      when: 'disabled',
      label: '<span class="valign-center"><i class="material-icons md-18 md-red-500">autorenew</i></span>',
      title: 'Restore',
      onClick: (event: CalendarSchedulerEvent): void => {
        console.log('Pressed action \'Restore\' on event ' + event.id);
      }
    }
  ];

  events: CalendarSchedulerEvent[] = new Array();
  eventsAlterados: CalendarSchedulerEvent[] = new Array();

  @ViewChild(CalendarSchedulerViewComponent) calendarScheduler: CalendarSchedulerViewComponent;
  private name: any;
  private animal: any;
  display: boolean;
  displayBasic: boolean;
  dataHoraSelecionada: Date;

  constructor(@Inject(LOCALE_ID) locale: string,
              private dateAdapter: DateAdapter,
              public dialog: MatDialog
  ) {
    this.locale = locale;

    this.dayModifier = ((day: SchedulerViewDay): void => {
      if (!this.isDateValid(day.date)) {
        day.cssClass = 'cal-disabled';
      }
    }).bind(this);
    this.hourModifier = ((hour: SchedulerViewHour): void => {
      if (!this.isDateValid(hour.date)) {
        hour.cssClass = 'cal-disabled';
      }
    }).bind(this);

    this.segmentModifier = ((segment: SchedulerViewHourSegment): void => {
      if (!this.isDateValid(segment.date)) {
        segment.isDisabled = true;
      }
    }).bind(this);

    this.eventModifier = ((event: CalendarSchedulerEvent): void => {
      event.isDisabled = !this.isDateValid(event.start);
    }).bind(this);

    this.dateOrViewChanged();
  }

  ngOnInit(): void {
    this.createEvent(null);
    /*this.appService.getEvents(this.actions)
      .then((events: CalendarSchedulerEvent[]) => this.events = events);*/
  }

  showDialog(segment: SchedulerViewHourSegment): void {
    this.dataHoraSelecionada = segment.date;
    this.display = true;
  }

  viewDaysOptionChanged(viewDays: any): void {
    console.log('viewDaysOptionChanged', viewDays);
    this.calendarScheduler.setViewDays(viewDays);
  }

  changeDate(date: Date): void {
    console.log('changeDate', date);
    this.viewDate = date;
    this.dateOrViewChanged();
  }

  changeView(view: CalendarView): void {
    console.log('changeView', view);
    this.view = view;
    this.dateOrViewChanged();
  }

  dateOrViewChanged(): void {
    if (this.startsWithToday) {
      this.prevBtnDisabled = !this.isDateValid(subPeriod(this.dateAdapter, CalendarView.Day/*this.view*/, this.viewDate, 1));
      this.nextBtnDisabled = !this.isDateValid(addPeriod(this.dateAdapter, CalendarView.Day/*this.view*/, this.viewDate, 1));
    } else {
      this.prevBtnDisabled = !this.isDateValid(endOfPeriod(this.dateAdapter, CalendarView.Day/*this.view*/, subPeriod(this.dateAdapter, CalendarView.Day/*this.view*/, this.viewDate, 1)));
      this.nextBtnDisabled = !this.isDateValid(startOfPeriod(this.dateAdapter, CalendarView.Day/*this.view*/, addPeriod(this.dateAdapter, CalendarView.Day/*this.view*/, this.viewDate, 1)));
    }

    if (this.viewDate < this.minDate) {
      this.changeDate(this.minDate);
    } else if (this.viewDate > this.maxDate) {
      this.changeDate(this.maxDate);
    }
  }

  private isDateValid(date: Date): boolean {
    return /*isToday(date) ||*/ date >= this.minDate && date <= this.maxDate;
  }

  viewDaysChanged(viewDays: any): void {
    console.log('viewDaysChanged', viewDays);
    this.viewDays = viewDays;
  }

  dayHeaderClicked(day: SchedulerViewDay): void {
    console.log('dayHeaderClicked Day', day);
  }

  hourClicked(hour: SchedulerViewHour): void {
    console.log('hourClicked Hour', hour);
  }

  segmentClicked(action: string, segment: SchedulerViewHourSegment): void {
    console.log('segmentClicked Action', action);
    console.log('segmentClicked Segment', segment);
    this.showDialog(segment);
  }

  private reloader(): void {
    setTimeout(() => this.reload = false);
    setTimeout(() => this.reload = true);
  }

  eventClicked(action: string, event: CalendarSchedulerEvent): void {
    console.log('eventClicked Action', action);
    console.log('eventClicked Event', event);
  }

  openDialog(segment: SchedulerViewHourSegment): void {
    const dialogRef = this.dialog.open(DialogAgendaConsultaComponent, {
      width: '600px',
      data: {data: segment.date}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.createEvent();
      this.reloader();
      console.log('The dialog was closed');
    });
  }

  eventTimesChanged({event, newStart, newEnd}: SchedulerEventTimesChangedEvent): void {
    console.log('eventTimesChanged Event', event);
    console.log('eventTimesChanged New Times', newStart, newEnd);
    const ev = this.events.find(e => e.id === event.id);
    ev.start = newStart;
    ev.end = newEnd;
    this.refresh.next();
  }

  createEvent(event?: CalendarSchedulerEvent): void {
    const evento: CalendarSchedulerEvent = new CalendarioEvento();

    evento.start = new Date('Tue Feb 23 2021 18:00:00 GMT-0400');
    evento.end = new Date('Tue Feb 23 2021 20:00:00 GMT-0400');
    evento.content = 'teste';
    evento.title = 'testando';
    event ? this.eventsAlterados.push(event) : this.eventsAlterados.push(evento);
    this.dateOrViewChanged();

  }

  ngAfterContentChecked(): void {
    this.events = this.eventsAlterados;
  }
}

import {CalendarSchedulerEvent} from 'angular-calendar-scheduler';
import {
  CalendarSchedulerEventAction,
  CalendarSchedulerEventStatus
} from 'angular-calendar-scheduler/modules/scheduler/models/calendar-scheduler-event.model';
import {EventColor} from 'calendar-utils';

export class Evento implements CalendarSchedulerEvent {
  actions: CalendarSchedulerEventAction[];
  color: EventColor;
  content: string;
  cssClass: string;
  draggable: boolean;
  end: Date;
  id: string;
  isCancelled: boolean;
  isClickable: boolean;
  isDisabled: boolean;
  resizable: { beforeStart?: boolean; afterEnd?: boolean };
  start: Date;
  status: CalendarSchedulerEventStatus;
  title: string;
}

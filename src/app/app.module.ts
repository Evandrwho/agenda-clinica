import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';
import {FullCalendarModule} from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction';


import {CoreModule} from './pages/modulos/core/core.module';
import {RouterModule, Routes} from '@angular/router';
import {AgendaComponent} from './pages/modulos/agenda/agenda/agenda.component';
import {DashboardComponent} from './pages/modulos/core/dashboard/dashboard.component';
import {TelaInicialComponent} from './pages/modulos/core/tela-inicial/tela-inicial.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

const routes: Routes = [
  {path: 'agenda', component: AgendaComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', component: TelaInicialComponent}
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { Component } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendar from '@fullcalendar/google-calendar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  calendarPlugins = [dayGridPlugin, googleCalendar];
}

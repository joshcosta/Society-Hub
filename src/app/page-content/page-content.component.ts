import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendar from '@fullcalendar/google-calendar';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.css']
})
export class PageContentComponent implements OnInit {
  calendarPlugins = [dayGridPlugin, googleCalendar];

  constructor() { }

  ngOnInit() {
  }


}

import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  NotificationsService,
  Options,
  SimpleNotificationsModule,
} from 'angular2-notifications';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SimpleNotificationsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'musical-events';
  notificationsOptions: Options = {
    position: ['top', 'right'],
    timeOut: 3000,
  };
}

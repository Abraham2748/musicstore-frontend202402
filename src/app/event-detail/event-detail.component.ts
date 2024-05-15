import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SimpleHeaderComponent } from '../shared/components/simple-header/simple-header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { EventDetailService } from './services/event-detail.service';
import { Concert } from '../shared/models/concert.model';
import { Observable, map } from 'rxjs';
import { EventCardComponent } from '../shared/components/event-card/event-card.component';
import { AsyncPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [
    SimpleHeaderComponent,
    FooterComponent,
    EventCardComponent,
    AsyncPipe,
    MatButtonModule,
  ],
  templateUrl: './event-detail.component.html',
  styleUrl: './event-detail.component.css',
})
export class EventDetailComponent implements OnInit {
  eventId = '';
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  eventDetailService = inject(EventDetailService);

  data$ = new Observable<Concert>();

  ngOnInit() {
    this.eventId = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.data$ = this.eventDetailService
      .getData(this.eventId)
      .pipe(map((response) => response.data));
  }
}

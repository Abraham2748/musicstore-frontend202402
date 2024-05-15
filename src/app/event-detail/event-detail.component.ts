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
import { MatDialog } from '@angular/material/dialog';
import { BuyDialogComponent } from './buy-dialog/buy-dialog.component';

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
  matDialog = inject(MatDialog);

  data$ = new Observable<Concert>();

  concertData: Concert | undefined;

  ngOnInit() {
    this.eventId = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.data$ = this.eventDetailService.getData(this.eventId).pipe(
      map((response) => {
        this.concertData = response.data;
        return response.data;
      })
    );
  }

  openDialog() {
    const dialogRef = this.matDialog.open(BuyDialogComponent, {
      data: this.concertData,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

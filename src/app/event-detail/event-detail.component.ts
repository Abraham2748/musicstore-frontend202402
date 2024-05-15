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
import { VoucherDialogComponent } from '../shared/components/voucher-dialog/voucher-dialog.component';
import { NotificationsService } from 'angular2-notifications';

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
  notificationsService = inject(NotificationsService);

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
    const buyDialogRef = this.matDialog.open(BuyDialogComponent, {
      data: this.concertData,
    });
    buyDialogRef.afterClosed().subscribe((saleId) => {
      if (saleId) {
        this.notificationsService.success(
          'Compra exitosa!',
          'Voucher generado'
        );
        const voucherDialogRef = this.matDialog.open(VoucherDialogComponent, {
          data: { saleId },
        });
        voucherDialogRef.afterClosed().subscribe(() => {
          this.router.navigate(['/home']);
        });
      }
    });
  }
}

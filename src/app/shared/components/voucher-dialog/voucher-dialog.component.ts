import { Component, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Sale, emptySale } from '../../models/sale.model';
import { Observable, map } from 'rxjs';
import { VoucherService } from '../../../event-detail/services/voucher.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-voucher-dialog',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './voucher-dialog.component.html',
  styleUrl: './voucher-dialog.component.css',
})
export class VoucherDialogComponent implements OnInit {
  data = inject(MAT_DIALOG_DATA) as { saleId: string };
  voucherService = inject(VoucherService);
  sale$ = new Observable<Sale>();

  ngOnInit() {
    this.sale$ = this.voucherService
      .getData(this.data.saleId)
      .pipe(map((response) => response.data));
  }
}

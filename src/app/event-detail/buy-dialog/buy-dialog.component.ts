import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Concert } from '../../shared/models/concert.model';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BuyService } from '../services/buy.service';

@Component({
  selector: 'app-buy-dialog',
  standalone: true,
  imports: [
    JsonPipe,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './buy-dialog.component.html',
  styleUrl: './buy-dialog.component.css',
})
export class BuyDialogComponent {
  data = inject(MAT_DIALOG_DATA) as Concert;
  buyService = inject(BuyService);
  matDialogRef = inject(MatDialogRef);

  buyTickets(quantity: number) {
    this.buyService
      .buy(this.data.id.toString(), quantity.toString())
      .subscribe((response) => {
        if (response.success) {
          this.matDialogRef.close(response.data);
        } else {
          alert(response.errorMessage);
        }
      });
  }
}

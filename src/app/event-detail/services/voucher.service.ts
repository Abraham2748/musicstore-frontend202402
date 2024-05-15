import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { BuyApiResponse, BuyRequestBody } from '../../shared/models/buy.model';
import { SaleApiResponse, emptySale } from '../../shared/models/sale.model';

@Injectable({
  providedIn: 'root',
})
export class VoucherService {
  private http = inject(HttpClient);
  private baseUrl = environment.baseUrl;

  loading = signal(false);

  getData(saleId: string): Observable<SaleApiResponse> {
    const apiUrl = this.baseUrl + '/api/sales/' + saleId;
    return this.http.get<SaleApiResponse>(apiUrl).pipe(
      catchError((httpErrorResponse: HttpErrorResponse) => {
        const errorResponse: SaleApiResponse = {
          data: emptySale,
          success: false,
          errorMessage: httpErrorResponse.error.errorMessage || 'Unknown error',
        };
        return of(errorResponse);
      })
    );
  }
}

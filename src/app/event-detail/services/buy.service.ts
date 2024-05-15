import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  LoginApiResponse,
  LoginRequestBody,
} from '../../shared/models/auth.model';
import { BuyApiResponse, BuyRequestBody } from '../../shared/models/buy.model';

@Injectable({
  providedIn: 'root',
})
export class BuyService {
  private http = inject(HttpClient);
  private baseUrl = environment.baseUrl;

  loading = signal(false);

  buy(concertId: string, ticketsQuantity: string): Observable<BuyApiResponse> {
    const apiUrl = this.baseUrl + '/api/sales';
    const body: BuyRequestBody = { concertId, ticketsQuantity };
    return this.http.post<BuyApiResponse>(apiUrl, body).pipe(
      catchError((httpErrorResponse: HttpErrorResponse) => {
        const errorResponse: BuyApiResponse = {
          data: 0,
          success: false,
          errorMessage: httpErrorResponse.error.errorMessage || 'Unknown error',
        };
        return of(errorResponse);
      })
    );
  }
}

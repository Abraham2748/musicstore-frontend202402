import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { EventDetailApiResponse } from '../../shared/models/event-detail.model';

@Injectable({
  providedIn: 'root',
})
export class EventDetailService {
  private http = inject(HttpClient);

  private baseUrl = environment.baseUrl;

  getData(id: string): Observable<EventDetailApiResponse> {
    const apiUrl = this.baseUrl + '/api/concerts/' + id;
    return this.http.get<EventDetailApiResponse>(apiUrl);
  }
}

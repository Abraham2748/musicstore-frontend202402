import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HomeApiResponse } from '../home.model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private http = inject(HttpClient);

  private baseUrl = environment.baseUrl;

  getData(): Observable<HomeApiResponse> {
    const apiUrl = this.baseUrl + '/api/Home';
    return this.http.get<HomeApiResponse>(apiUrl);
  }
}

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import {
  ForgotPasswordApiResponse,
  ForgotPasswordRequestBody,
  LoginApiResponse,
  LoginRequestBody,
  RegisterApiResponse,
  RegisterRequestBody,
} from '../models/auth.model';
import { Observable, catchError, of } from 'rxjs';
import { NotificationsService } from 'angular2-notifications';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private baseUrl = environment.baseUrl;
  private notificationsService = inject(NotificationsService);
  loading = signal(false);
  loggedIn = signal(false);

  login(email: string, password: string): Observable<LoginApiResponse> {
    const apiUrl = this.baseUrl + '/api/users/login';
    const body: LoginRequestBody = { username: email, password };
    return this.http.post<LoginApiResponse>(apiUrl, body).pipe(
      catchError((httpErrorResponse: HttpErrorResponse) => {
        const errorResponse: LoginApiResponse = {
          success: false,
          data: { expirationDate: '', token: '' },
          errorMessage: httpErrorResponse.error.errorMessage || 'Unknown error',
        };
        return of(errorResponse);
      })
    );
  }
  logout() {
    localStorage.removeItem('token');
    this.loggedIn.set(false);
    this.notificationsService.success('Logout exitoso', 'Hasta luego');
  }

  register(body: RegisterRequestBody): Observable<RegisterApiResponse> {
    const apiUrl = this.baseUrl + '/api/users/register';
    return this.http.post<RegisterApiResponse>(apiUrl, body).pipe(
      catchError((httpErrorResponse: HttpErrorResponse) => {
        const errorResponse: RegisterApiResponse = {
          success: false,
          data: { expirationDate: '', token: '', userId: '' },
          errorMessage: httpErrorResponse.error.errorMessage || 'Unknown error',
        };
        return of(errorResponse);
      })
    );
  }

  forgotPassword(email: string): Observable<ForgotPasswordApiResponse> {
    const apiUrl = this.baseUrl + '/api/users/RequestTokenToResetPassword';
    const body: ForgotPasswordRequestBody = { email };
    return this.http.post<ForgotPasswordApiResponse>(apiUrl, body).pipe(
      catchError((httpErrorResponse: HttpErrorResponse) => {
        const errorResponse: ForgotPasswordApiResponse = {
          success: false,
          errorMessage:
            httpErrorResponse.error?.errorMessage || 'Unknown error',
        };
        return of(errorResponse);
      })
    );
  }
}

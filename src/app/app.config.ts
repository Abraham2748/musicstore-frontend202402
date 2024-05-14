import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {
  jwtInterceptor,
  loadingScreenInterceptor,
} from './shared/interceptors/auth.interceptor';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NgxLoadingModule } from 'ngx-loading';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(
      withInterceptors([jwtInterceptor, loadingScreenInterceptor])
    ),
    importProvidersFrom(
      SimpleNotificationsModule.forRoot(),
      NgxLoadingModule.forRoot({})
    ),
  ],
};

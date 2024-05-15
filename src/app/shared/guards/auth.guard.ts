import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NotificationsService } from 'angular2-notifications';

export const authGuard: CanActivateFn = (route) => {
  const authService = inject(AuthService);
  let continueNavigation = true;
  if (route.url[0].path === 'admin')
    continueNavigation =
      authService.loggedIn() && authService.isAdministrator();
  else if (route.url[0].path === 'customer')
    continueNavigation =
      authService.loggedIn() && !authService.isAdministrator();

  if (!continueNavigation) {
    const notificationsService = inject(NotificationsService);
    notificationsService.error(
      'Acceso denegado',
      'No tienes permisos para acceder a esta página'
    );
    const router = inject(Router);
    router.navigate(['/home']);
  }
  return continueNavigation;
};

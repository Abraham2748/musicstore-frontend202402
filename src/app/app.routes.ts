import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    pathMatch: 'full',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'login',
    pathMatch: 'full',
    loadComponent: () =>
      import('./login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'register',
    pathMatch: 'full',
    loadComponent: () =>
      import('./register/register.component').then((m) => m.RegisterComponent),
  },
  {
    path: 'forgot-password',
    pathMatch: 'full',
    loadComponent: () =>
      import('./forgot-password/forgot-password.component').then(
        (m) => m.ForgotPasswordComponent
      ),
  },
  {
    path: 'admin',
    pathMatch: 'prefix',
    loadComponent: () =>
      import('./admin/admin.component').then((m) => m.AdminComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'sales',
      },
      {
        path: 'sales',
        pathMatch: 'full',
        loadComponent: () =>
          import('./admin/sales/sales.component').then((m) => m.SalesComponent),
      },
      {
        path: 'events',
        pathMatch: 'full',
        loadComponent: () =>
          import('./admin/events/events.component').then(
            (m) => m.EventsComponent
          ),
      },
      {
        path: 'genres',
        pathMatch: 'full',
        loadComponent: () =>
          import('./admin/genres/genres.component').then(
            (m) => m.GenresComponent
          ),
      },
      {
        path: 'reports',
        pathMatch: 'full',
        loadComponent: () =>
          import('./admin/reports/reports.component').then(
            (m) => m.ReportsComponent
          ),
      },
    ],
  },
];

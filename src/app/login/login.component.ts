import { Component, inject } from '@angular/core';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { SimpleHeaderComponent } from '../shared/components/simple-header/simple-header.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    SimpleHeaderComponent,
    FooterComponent,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  authService = inject(AuthService);
  router = inject(Router);
  notifications = inject(NotificationsService);

  login() {
    const email = this.loginForm.controls.email.value!;
    const password = this.loginForm.controls.password.value!;
    this.authService.login(email, password).subscribe((response) => {
      console.log('response', response);
      if (response && response.success) {
        // Redirect to the customer page
        console.log('Login successful');
        localStorage.setItem('token', response.data.token);
        this.authService.loggedIn.set(true);
        this.notifications.success(
          'Login Exitoso',
          'Bienvenido a Musical Events'
        );
        if (email === 'admin@gmail.com') {
          this.authService.isAdministrator.set(true);
          this.router.navigate(['/admin']);
        } else {
          this.authService.isAdministrator.set(false);
          this.router.navigate(['/customer']);
        }
      } else {
        // Display an error notification
        this.notifications.error('Login Fallido', 'Revisa tus credenciales');
        console.log('Login failed');
      }
    });
  }
}

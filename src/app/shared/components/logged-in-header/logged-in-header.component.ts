import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-logged-in-header',
  standalone: true,
  imports: [MatButtonModule, RouterLink],
  templateUrl: './logged-in-header.component.html',
  styleUrl: './logged-in-header.component.css',
})
export class LoggedInHeaderComponent {
  authService = inject(AuthService);
}

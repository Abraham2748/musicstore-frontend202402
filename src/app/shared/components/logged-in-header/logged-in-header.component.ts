import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logged-in-header',
  standalone: true,
  imports: [MatButtonModule, RouterLink],
  templateUrl: './logged-in-header.component.html',
  styleUrl: './logged-in-header.component.css',
})
export class LoggedInHeaderComponent {}

import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { LoggedInHeaderComponent } from '../shared/components/logged-in-header/logged-in-header.component';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [
    LoggedInHeaderComponent,
    FooterComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
})
export class CustomerComponent {}

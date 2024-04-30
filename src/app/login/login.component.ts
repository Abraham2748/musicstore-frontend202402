import { Component } from '@angular/core';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { HeaderComponent } from '../home/header/header.component';
import { SimpleHeaderComponent } from '../shared/components/simple-header/simple-header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SimpleHeaderComponent, FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {}

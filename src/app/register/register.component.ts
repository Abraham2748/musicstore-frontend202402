import { Component, inject } from '@angular/core';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { HeaderComponent } from '../home/header/header.component';
import { SimpleHeaderComponent } from '../shared/components/simple-header/simple-header.component';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { RegisterRequestBody } from '../shared/models/auth.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    SimpleHeaderComponent,
    FooterComponent,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    documentType: new FormControl('', [Validators.required]),
    documentNumber: new FormControl('', [Validators.required]),
  });

  authService = inject(AuthService);

  register() {
    const body: RegisterRequestBody = {
      documentNumber: this.registerForm.controls.documentNumber.value!,
      firstName: this.registerForm.controls.name.value!,
      lastName: this.registerForm.controls.lastName.value!,
      password: this.registerForm.controls.password.value!,
      email: this.registerForm.controls.email.value!,
      documentType: Number.parseInt(
        this.registerForm.controls.documentType.value!
      ),
      age: Number.parseInt(this.registerForm.controls.age.value!),
      confirmPassword: this.registerForm.controls.password.value!,
    };

    this.authService.register(body).subscribe((response) => {
      console.log('response', response);
      if (response && response.success) {
        // Redirect to the customer page
        console.log('Register successful');
      } else {
        // Display an error notification
        console.log('Register failed');
      }
    });
  }
}

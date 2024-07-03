import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import axios from 'axios';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, FormsModule], // Asegúrate de importar CommonModule y FormsModule
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'] // Corrige el nombre a styleUrls
})
export class LoginFormComponent {
  email: string = '';
  password: string = '';
  emailError: boolean = false;
  passwordError: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  async onSubmit() {
    this.emailError = !this.email;
    this.passwordError = !this.password || this.password.length < 3;

    if (!this.emailError && !this.passwordError) {
      try {
        const response = await axios.post('http://localhost:8000/auth/login/', {
          username: this.email,
          password: this.password
        });
        // Usar el servicio de autenticación para guardar el token y redirigir
        this.authService.login(response.data.token);
        this.router.navigate(['/home']);
      } catch (error) {
        console.error('Error de autenticación:', error);
        alert('Credenciales inválidas.');
      }
    }
  }


  
}
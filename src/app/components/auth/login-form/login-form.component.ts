import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import axios from 'axios';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  async onSubmit() {
    this.emailError = !this.email;
    this.passwordError = !this.password || this.password.length < 6;

    if (!this.emailError && !this.passwordError) {
      try {
        const response = await axios.post('http://localhost:8000/auth/login/', {
          username: this.email,
          password: this.password
        });
        // Guardar el token y redirigir si es necesario
        localStorage.setItem('token', response.data.token);
        this.router.navigate(['/home']);
      } catch (error) {
        // Manejar el error de autenticación
        console.error('Error de autenticación:', error);
        alert('Credenciales inválidas.');
      }
    }
  }
}

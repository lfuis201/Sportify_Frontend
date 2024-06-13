import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [CommonModule, FormsModule], // Asegúrate de importar CommonModule y FormsModule
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'] // Corrige el nombre a styleUrls
})
export class RegisterFormComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  dni: string = '';
  nombre: string = '';
  apellido: string = '';
  telefono: string = '';
  rol: string = 'atleta';

  emailError: boolean = false;
  passwordError: boolean = false;

  constructor(private router: Router) {}

  async onSubmit() {
    this.emailError = !this.email;
    this.passwordError = !this.password || this.password.length < 6;

    if (!this.emailError && !this.passwordError) {
      try {
        const response = await axios.post('http://localhost:8000/auth/register/', {
          username: this.username,
          email: this.email,
          password: this.password,
          dni: this.dni,
          nombre: this.nombre,
          apellido: this.apellido,
          telefono: this.telefono,
          rol: this.rol
        });
        // Redirigir si es necesario
        this.router.navigate(['/login']);
      } catch (error) {
        // Manejar el error de registro
        console.error('Error de registro:', error);
        alert('Error al registrarse.');
      }
    }
  }
}

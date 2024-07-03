import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import axios from 'axios';

@Component({
  selector: 'app-federaciones-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './federaciones-form.component.html',
  styleUrl: './federaciones-form.component.css'
})
export class FederacionesFormComponent {
  nombre: string = '';
  descripcion: string = '';

  constructor() {}

  onSubmit() {
    const formData = {
      nombre: this.nombre,
      descripcion: this.descripcion
    };

    axios.post('http://127.0.0.1:8000/api/federaciones/', formData)
      .then(response => {
        console.log('Federation created successfully!', response.data);
        // Aquí puedes manejar la respuesta como desees, por ejemplo, mostrar un mensaje de éxito.
      })
      .catch(error => {
        console.error('Error creating federation:', error);
        // Maneja los errores apropiadamente, por ejemplo, mostrando un mensaje de error al usuario.
      });
  }
}
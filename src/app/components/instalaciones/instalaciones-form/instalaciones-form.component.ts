import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import axios from 'axios';
@Component({
  selector: 'app-instalaciones-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './instalaciones-form.component.html',
  styleUrl: './instalaciones-form.component.css'
})
export class InstalacionesFormComponent {
  installationName: string = '';
  installationType: string = '';
  installationAddress: string = '';
  installationCapacity: number | null = null;
  installationPrice: number | null = null;
  installationManager: string = '';

  constructor() {}

  onSubmit() {
    const formData = {
      nombre: this.installationName,
      tipo: this.installationType,
      direccion: this.installationAddress,
      capacidad: this.installationCapacity,
      precio: this.installationPrice,
      encargado: this.installationManager
    };

    axios.post('http://127.0.0.1:8000/api/instalaciones/', formData)
      .then(response => {
        console.log('Installation created successfully!', response.data);
        // Aquí puedes manejar la respuesta como desees, por ejemplo, mostrar un mensaje de éxito.
      })
      .catch(error => {
        console.error('Error creating installation:', error);
        // Maneja los errores apropiadamente, por ejemplo, mostrando un mensaje de error al usuario.
      });
  }
}
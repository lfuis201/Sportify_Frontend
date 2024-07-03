import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para manejar ngModel

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule], // Añade FormsModule aquí para utilizar ngModel en formularios
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  deportes: any[] = [];
  selectedDeporte: any = {};
  isUpdatingDeporte: boolean = false;

  entrenadores: any[] = [];
  selectedEntrenador: any = {};
  isUpdatingEntrenador: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.loadDeportes();
    this.loadEntrenadores();
  }

  loadDeportes(): void {
    // Simulación de datos (deberían venir del backend)
    this.deportes = [
      { id: 1, nombre: 'Fútbol', descripcion: 'Deporte de equipo' },
      { id: 2, nombre: 'Baloncesto', descripcion: 'Deporte de equipo' }
    ];
  }

  loadEntrenadores(): void {
    // Simulación de datos (deberían venir del backend)
    this.entrenadores = [
      { id: 1, nombre: 'Juan', apellido: 'Pérez', especialidad: 1, email: 'juan@example.com', telefono: '123456789' },
      { id: 2, nombre: 'Ana', apellido: 'García', especialidad: 2, email: 'ana@example.com', telefono: '987654321' }
    ];
  }

  selectDeporte(deporte: any): void {
    this.selectedDeporte = { ...deporte };
    this.isUpdatingDeporte = true;
  }

  selectEntrenador(entrenador: any): void {
    this.selectedEntrenador = { ...entrenador };
    this.isUpdatingEntrenador = true;
  }

  verDeporte(deporte: any): void {
    console.log('Ver deporte:', deporte);
    // Aquí puedes añadir lógica para ver los detalles del deporte
  }

  editarDeporte(deporte: any): void {
    this.selectDeporte(deporte);
  }

  verEntrenador(entrenador: any): void {
    console.log('Ver entrenador:', entrenador);
    // Aquí puedes añadir lógica para ver los detalles del entrenador
  }

  editarEntrenador(entrenador: any): void {
    this.selectEntrenador(entrenador);
  }

  onSubmitDeporte(): void {
    if (this.isUpdatingDeporte) {
      // Actualizar deporte
      const index = this.deportes.findIndex(d => d.id === this.selectedDeporte.id);
      if (index !== -1) {
        this.deportes[index] = this.selectedDeporte;
      }
    } else {
      // Crear deporte
      this.selectedDeporte.id = this.deportes.length + 1;
      this.deportes.push(this.selectedDeporte);
    }
    this.resetDeporteForm();
  }

  onSubmitEntrenador(): void {
    if (this.isUpdatingEntrenador) {
      // Actualizar entrenador
      const index = this.entrenadores.findIndex(e => e.id === this.selectedEntrenador.id);
      if (index !== -1) {
        this.entrenadores[index] = this.selectedEntrenador;
      }
    } else {
      // Crear entrenador
      this.selectedEntrenador.id = this.entrenadores.length + 1;
      this.entrenadores.push(this.selectedEntrenador);
    }
    this.resetEntrenadorForm();
  }

  deleteDeporte(id: number): void {
    this.deportes = this.deportes.filter(d => d.id !== id);
  }

  deleteEntrenador(id: number): void {
    this.entrenadores = this.entrenadores.filter(e => e.id !== id);
  }

  resetDeporteForm(): void {
    this.selectedDeporte = {};
    this.isUpdatingDeporte = false;
  }

  resetEntrenadorForm(): void {
    this.selectedEntrenador = {};
    this.isUpdatingEntrenador = false;
  }
}
import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-instalaciones-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instalaciones-list.component.html',
  styleUrl: './instalaciones-list.component.css'
})
export class InstalacionesListComponent implements OnInit {
  instalaciones: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.obtenerFederaciones();
  }

  obtenerFederaciones() {
    axios.get('http://localhost:8000/api/instalaciones/')
      .then(response => {
        this.instalaciones = response.data;
      })
      .catch(error => {
        console.error('Error al obtener las federaciones:', error);
        // Manejar errores aquí si es necesario
      });
  }
}
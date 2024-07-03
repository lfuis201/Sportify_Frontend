import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import axios from 'axios';

@Component({
  selector: 'app-federaciones-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './federaciones-list.component.html',
  styleUrl: './federaciones-list.component.css'
})
export class FederacionesListComponent implements OnInit{
  federaciones: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.obtenerEventos();
  }

  obtenerEventos() {
    axios.get('http://127.0.0.1:8000/api/federaciones/')
      .then(response => {
        this.federaciones = response.data;
      })
      .catch(error => {
        console.error('Error al obtener federaciones:', error);
        // Manejar errores aquí
      });
  }
}

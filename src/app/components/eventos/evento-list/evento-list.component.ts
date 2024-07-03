import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-evento-list',
  imports: [CommonModule],
  standalone: true,

  templateUrl: './evento-list.component.html',
  styleUrls: ['./evento-list.component.css']
})
export class EventoListComponent implements OnInit {
  eventos: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.obtenerEventos();
  }

  obtenerEventos() {
    axios.get('http://127.0.0.1:8000/api/eventos/')
      .then(response => {
        this.eventos = response.data;
      })
      .catch(error => {
        console.error('Error al obtener eventos:', error);
        // Manejar errores aquí
      });
  }
}

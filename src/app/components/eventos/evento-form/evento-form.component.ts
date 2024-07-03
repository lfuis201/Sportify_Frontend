import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-evento-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './evento-form.component.html',
  styleUrls: ['./evento-form.component.css']
})
export class EventoFormComponent implements OnInit {
  instalaciones: any[] = [];
  federaciones: any[] = [];
  eventName: string = '';
  eventDate: string = '';
  eventDescription: string = '';
  selectedInstalacion: string = '';
  selectedFederacion: string = '';

  ngOnInit() {
    this.fetchInstalaciones();
    this.fetchFederaciones();
  }

  fetchInstalaciones() {
    axios.get('http://127.0.0.1:8000/api/instalaciones/')
      .then(response => {
        this.instalaciones = response.data;
      })
      .catch(error => {
        console.error('Error fetching instalaciones:', error);
      });
  }

  fetchFederaciones() {
    axios.get('http://127.0.0.1:8000/api/federaciones/')
      .then(response => {
        this.federaciones = response.data;
      })
      .catch(error => {
        console.error('Error fetching federaciones:', error);
      });
  }

  onSubmit() {
    const eventData = {
      nombre: this.eventName,
      fecha: this.eventDate,
      descripcion: this.eventDescription,
      instalacion: this.selectedInstalacion,
      federacion: this.selectedFederacion
    };

    axios.post('http://127.0.0.1:8000/api/eventos/', eventData)
      .then(response => {
        console.log('Event created successfully!', response.data);
        // Aquí puedes manejar la respuesta como desees, por ejemplo, mostrar un mensaje de éxito.
      })
      .catch(error => {
        console.error('Error creating event:', error);
        // Maneja los errores apropiadamente, por ejemplo, mostrando un mensaje de error al usuario.
      });
  }
}

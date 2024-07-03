import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoFormComponent } from '../evento-form/evento-form.component';
import { InstalacionesFormComponent } from '../../instalaciones/instalaciones-form/instalaciones-form.component';
import { FederacionesFormComponent } from '../../federaciones/federaciones-form/federaciones-form.component';
import { EventoListComponent } from '../evento-list/evento-list.component';
import { InstalacionesListComponent } from '../../instalaciones/instalaciones-list/instalaciones-list.component';
import { FederacionesListComponent } from '../../federaciones/federaciones-list/federaciones-list.component';



@Component({
  selector: 'app-evento',
  standalone: true,
  imports: [CommonModule,EventoFormComponent,InstalacionesFormComponent,FederacionesFormComponent,
    EventoListComponent,
    InstalacionesListComponent,
    FederacionesListComponent ],
  templateUrl: './evento.component.html',
  styleUrl: './evento.component.css'
})
export class EventoComponent {
  mostrarEventoFormulario: boolean = false;
  mostrarEventoForInstalaciones: boolean = false;
  mostrarEventoForFederaciones: boolean = false;

  mostrarFormulario() {
    this.mostrarEventoFormulario = true;
    this.mostrarEventoForInstalaciones = false;
    this.mostrarEventoForFederaciones = false;

  }

  mostrarFormInstalaciones(){
    this.mostrarEventoForInstalaciones = true;
    this.mostrarEventoFormulario = false;
    this.mostrarEventoForFederaciones = false;


  }

  mostrarFormFederaciones(){
    this.mostrarEventoForFederaciones = true;
    this.mostrarEventoForInstalaciones = false;
    this.mostrarEventoFormulario = false;


  }
}

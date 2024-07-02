import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';

import { HomeComponent } from './pages/homePage/home/home.component';
import { EventoComponent } from './components/eventos/evento/evento.component';
import { AdminComponent } from './components/admin/admin.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    { path: 'home', component: HomeComponent },
    { path: 'eventos', component: EventoComponent },
    { path: 'admin', component: AdminComponent },


];

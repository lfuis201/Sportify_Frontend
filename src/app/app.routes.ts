import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';

import { HomeComponent } from './pages/homePage/home/home.component';
import { EventoComponent } from './components/eventos/evento/evento.component';
import { AdminComponent } from './components/admin/admin.component';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    { path: 'home', component: HomeComponent },
    { path: 'eventos', component: EventoComponent ,canActivate: [AuthGuard]},
    { path: 'admin', component: AdminComponent ,canActivate: [AuthGuard]},


];

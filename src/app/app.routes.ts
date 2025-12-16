import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { RegistroComponent } from './pages/registro/registro';
import { ReportesComponent } from './pages/reportes/reportes';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'reportes', component: ReportesComponent },
  { path: '**', redirectTo: '' }
];
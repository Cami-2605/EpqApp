import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.html',
  styleUrls: ['./reportes.css']
})
export class Reportes {

  municipio: string = '';
  periodo: string = '';
  Desde: string = '';
  Hasta: string = '';

  municipios: string[] = ['Montenegro', 'Armenia', 'Calarcá', 'La Tebaida'];
  periodos: string[] = ['2023', '2024', '2025'];

  constructor(private router: Router) {}

  cerrarSesion() {
    console.log('Cerrando sesión...');
    this.router.navigate(['/login']);
  }

  generarReporte() {
    console.log('Generando reporte con:');
    console.log('Municipio:', this.municipio);
    console.log('Periodo:', this.periodo);
    console.log('Desde:', this.Desde);
    console.log('Hasta:', this.Hasta);
  }

  descargarPDF() {
    console.log('Descargando PDF...');
  }
}
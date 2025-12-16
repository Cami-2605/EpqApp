import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReporteFiltroDto } from '../models/dto/reporte-filtro.dto';

@Injectable({ providedIn: 'root' })
export class ReporteService {

  private api = 'http://localhost:8080/api/reportes';

  constructor(private http: HttpClient) {}

  generar(dto: ReporteFiltroDto) {
    return this.http.post(`${this.api}/general`, dto);
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PeriodoDto } from '../models/dto/periodo.dto';

@Injectable({ providedIn: 'root' })
export class PeriodoService {
  private api = 'http://localhost:8080/api/periodo';

  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get<PeriodoDto[]>(`${this.api}`);
  }
}
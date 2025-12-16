import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MunicipioDto } from '../models/dto/municipio.dto';

@Injectable({ providedIn: 'root' })
export class MunicipioService {

  private api = 'http://localhost:8080/api/municipio';

  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get<MunicipioDto[]>(`${this.api}`);
  }
}
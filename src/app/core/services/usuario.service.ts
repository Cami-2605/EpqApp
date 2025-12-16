import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioDto } from '../models/dto/usuario.dto';

@Injectable({ providedIn: 'root' })
export class UsuarioService {
  private api = 'http://localhost:8080/api/usuario';

  constructor(private http: HttpClient) {}

  perfil() {
    return this.http.get<UsuarioDto>(`${this.api}/perfil`);
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDto } from '../models/dto/login.dto';
import { RegistroDto } from '../models/dto/registro.dto';
import { AuthResponseDto } from '../models/dto/auth-response.dto';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private api = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {}

  login(dto: LoginDto) {
    return this.http.post<AuthResponseDto>(`${this.api}/login`, dto);
  }

  registro(dto: RegistroDto) {
    return this.http.post(`${this.api}/registro`, dto);
  }
}
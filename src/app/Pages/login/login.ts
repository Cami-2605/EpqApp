import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginDto } from '../../core/models/dto/login.dto';
import { AuthService } from '../../core/services/auth.service';
import { StorageService } from '../../core/services/storage.service';
import { ToastService } from '../../components/toast/service/toast.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  model: LoginDto = { usuario: '', password: '' };

  loading = false;

  constructor(
    private auth: AuthService,
    private storage: StorageService,
    private toast: ToastService,
    private router: Router
  ) {}

  enviar() {
    if (!this.model.usuario || !this.model.password) {
      this.toast.show("Por favor ingresa usuario y contraseña");
      return;
    }

    this.loading = true;

    this.auth.login(this.model).subscribe({
      next: (res) => {
        this.loading = false;
        this.storage.saveToken(res.token);
        this.toast.show("Bienvenido");
        this.router.navigate(['/reportes']);
      },
      error: () => {
        this.loading = false;
        this.toast.show("Credenciales incorrectas");
      }
    });
  }

  irARegistro() {
    this.router.navigate(['/registro']);
  }
}
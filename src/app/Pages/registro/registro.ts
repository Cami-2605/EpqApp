import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { ToastService } from '../../components/toast/service/toast.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registro.html',
  styleUrls: ['./registro.css']
})
export class RegistroComponent {

  form: any;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private toast: ToastService,
    private router: Router
  ) {

    // AQUÍ se crea el form UNA SOLA VEZ
    this.form = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      documento: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      usuario: ['', Validators.required],
      password: ['', Validators.required],
      confirmar: ['', Validators.required]
    });

  }

  enviar() {

    if (this.form.invalid) {
      this.toast.show('Completa todos los campos');
      return;
    }

    if (this.form.value.password !== this.form.value.confirmar) {
      this.toast.show('Las contraseñas no coinciden');
      return;
    }

    this.auth.registro({
      nombres: this.form.value.nombres!,
      apellidos: this.form.value.apellidos!,
      documento: this.form.value.documento!,
      telefono: this.form.value.telefono!,
      correo: this.form.value.correo!,
      usuario: this.form.value.usuario!,
      password: this.form.value.password!
    }).subscribe({
      next: () => {
        this.toast.show('Usuario registrado');
        this.router.navigate(['/login']);
      },
      error: () => this.toast.show('No se pudo registrar')
    });
  }
}
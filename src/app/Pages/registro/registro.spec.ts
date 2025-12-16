import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroComponent } from './registro';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { ToastService } from '../../components/toast/service/toast.service';
import { Router } from '@angular/router';

// Mocks mínimos para que compile sin datos reales
class MockAuthService {
  registro() { return { subscribe: () => {} }; }
}

class MockToastService {
  show() {}
}

class MockRouter {
  navigate() {}
}

describe('RegistroComponent', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroComponent, CommonModule, ReactiveFormsModule],
      providers: [
        { provide: AuthService, useClass: MockAuthService },
        { provide: ToastService, useClass: MockToastService },
        { provide: Router, useClass: MockRouter }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe crearse correctamente', () => {
    expect(component).toBeTruthy();
  });
});
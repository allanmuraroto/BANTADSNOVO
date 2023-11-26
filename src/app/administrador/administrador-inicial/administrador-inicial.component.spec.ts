import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorInicialComponent } from './administrador-inicial.component';

describe('AdministradorInicialComponent', () => {
  let component: AdministradorInicialComponent;
  let fixture: ComponentFixture<AdministradorInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministradorInicialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministradorInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenteClienteperfilComponent } from './gerente-clienteperfil.component';

describe('GerenteClienteperfilComponent', () => {
  let component: GerenteClienteperfilComponent;
  let fixture: ComponentFixture<GerenteClienteperfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenteClienteperfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenteClienteperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

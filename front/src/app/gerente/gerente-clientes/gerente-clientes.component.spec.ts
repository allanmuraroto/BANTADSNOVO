import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenteClientesComponent } from './gerente-clientes.component';

describe('GerenteClientesComponent', () => {
  let component: GerenteClientesComponent;
  let fixture: ComponentFixture<GerenteClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenteClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenteClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

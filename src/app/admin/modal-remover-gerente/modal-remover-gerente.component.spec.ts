import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRemoverGerenteComponent } from './modal-remover-gerente.component';

describe('ModalRemoverGerenteComponent', () => {
  let component: ModalRemoverGerenteComponent;
  let fixture: ComponentFixture<ModalRemoverGerenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRemoverGerenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalRemoverGerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDepositoComponent } from './modal-deposito.component';

describe('ModalDepositoComponent', () => {
  let component: ModalDepositoComponent;
  let fixture: ComponentFixture<ModalDepositoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDepositoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDepositoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

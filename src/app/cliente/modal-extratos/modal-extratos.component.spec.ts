import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExtratosComponent } from './modal-extratos.component';

describe('ModalExtratosComponent', () => {
  let component: ModalExtratosComponent;
  let fixture: ComponentFixture<ModalExtratosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalExtratosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalExtratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSaqueComponent } from './modal-saque.component';

describe('ModalSaqueComponent', () => {
  let component: ModalSaqueComponent;
  let fixture: ComponentFixture<ModalSaqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSaqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAprovarComponent } from './modal-aprovar.component';

describe('ModalAprovarComponent', () => {
  let component: ModalAprovarComponent;
  let fixture: ComponentFixture<ModalAprovarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAprovarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAprovarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

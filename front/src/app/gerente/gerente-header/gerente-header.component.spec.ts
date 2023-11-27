import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenteHeaderComponent } from './gerente-header.component';

describe('GerenteHeaderComponent', () => {
  let component: GerenteHeaderComponent;
  let fixture: ComponentFixture<GerenteHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenteHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenteHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

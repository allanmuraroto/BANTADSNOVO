import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorHeaderComponent } from './administrador-header.component';

describe('AdministradorHeaderComponent', () => {
  let component: AdministradorHeaderComponent;
  let fixture: ComponentFixture<AdministradorHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministradorHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministradorHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

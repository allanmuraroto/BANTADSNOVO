import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaInfoComponent } from './conta-info.component';

describe('ContaInfoComponent', () => {
  let component: ContaInfoComponent;
  let fixture: ComponentFixture<ContaInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContaInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

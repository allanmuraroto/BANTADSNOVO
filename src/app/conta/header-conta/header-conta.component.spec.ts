import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderContaComponent } from './header-conta.component';

describe('HeaderContaComponent', () => {
  let component: HeaderContaComponent;
  let fixture: ComponentFixture<HeaderContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderContaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

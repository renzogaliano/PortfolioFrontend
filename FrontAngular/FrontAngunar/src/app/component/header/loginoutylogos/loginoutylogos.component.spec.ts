import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginoutylogosComponent } from './loginoutylogos.component';

describe('LoginoutylogosComponent', () => {
  let component: LoginoutylogosComponent;
  let fixture: ComponentFixture<LoginoutylogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginoutylogosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginoutylogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

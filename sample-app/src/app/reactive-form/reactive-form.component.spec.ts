import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { ReactiveFormComponent } from './reactive-form.component';

describe('ReactiveFormComponent', () => {
  let component: ReactiveFormComponent;
  let fixture: ComponentFixture<ReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReactiveFormComponent],
      imports: [ReactiveFormsModule],
      providers: [FormBuilder]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should require valid email', () => {
    component.loginForm.setValue({
      "name": "",
      "email": "invalidemail"
    });

    expect(component.loginForm.valid).toEqual(false);
  });

  it('should be valid if form value is valid', () => {
    component.loginForm.setValue({
      "name": "Kishore",
      "email": "abc@gmail.com"
    });

    expect(component.loginForm.valid).toEqual(true);
  });

  it('should invoke submit if form value is valid', () => {
    component.loginForm.setValue({
      "name": "Kishore",
      "email": "abc@gmail.com"
    });

    expect(component.loginForm.valid).toEqual(true);
    component.submit();
  });
});

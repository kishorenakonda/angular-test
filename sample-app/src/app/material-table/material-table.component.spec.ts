import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpService } from '../services/http.service';
import { UserService } from '../services/user.service';

import { MaterialTableComponent } from './material-table.component';

describe('MaterialTableComponent', () => {
  let component: MaterialTableComponent;
  let fixture: ComponentFixture<MaterialTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaterialTableComponent],
      providers: [UserService, HttpService, HttpClient, HttpHandler]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MaterialTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

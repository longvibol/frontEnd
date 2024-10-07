import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesDetail1Component } from './employees-detail1.component';

describe('EmployeesDetail1Component', () => {
  let component: EmployeesDetail1Component;
  let fixture: ComponentFixture<EmployeesDetail1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesDetail1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesDetail1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

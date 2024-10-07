import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWaysBindingComponent } from './two-ways-binding.component';

describe('TwoWaysBindingComponent', () => {
  let component: TwoWaysBindingComponent;
  let fixture: ComponentFixture<TwoWaysBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWaysBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWaysBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

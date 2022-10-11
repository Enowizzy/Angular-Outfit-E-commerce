import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPostComponent } from './customer-post.component';

describe('CustomerPostComponent', () => {
  let component: CustomerPostComponent;
  let fixture: ComponentFixture<CustomerPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceMainComponent } from './ecommerce-main.component';

describe('EcommerceMainComponent', () => {
  let component: EcommerceMainComponent;
  let fixture: ComponentFixture<EcommerceMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcommerceMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcommerceMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

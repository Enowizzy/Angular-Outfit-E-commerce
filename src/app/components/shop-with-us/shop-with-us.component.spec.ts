import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopWithUsComponent } from './shop-with-us.component';

describe('ShopWithUsComponent', () => {
  let component: ShopWithUsComponent;
  let fixture: ComponentFixture<ShopWithUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopWithUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopWithUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

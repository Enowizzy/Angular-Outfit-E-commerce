import { TestBed } from '@angular/core/testing';

import { CategoryBrandService } from './category-brand.service';

describe('CategoryBrandService', () => {
  let service: CategoryBrandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryBrandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

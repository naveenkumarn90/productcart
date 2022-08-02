import { TestBed } from '@angular/core/testing';
import { EcommerceAppService } from './service.component';


describe('EcommerceAppService', () => {
  let service: EcommerceAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcommerceAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
}); 
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingAdsComponent } from './pending-ads.component';

describe('PendingAdsComponent', () => {
  let component: PendingAdsComponent;
  let fixture: ComponentFixture<PendingAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingAdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

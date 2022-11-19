import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingSectionComponent } from './trending-section.component';

describe('TrendingSectionComponent', () => {
  let component: TrendingSectionComponent;
  let fixture: ComponentFixture<TrendingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSliderComponent } from './home-slider.component';

describe('HomeSliderComponent', () => {
  let component: HomeSliderComponent;
  let fixture: ComponentFixture<HomeSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChildComponent } from './home-child.component';

describe('HomeChildComponent', () => {
  let component: HomeChildComponent;
  let fixture: ComponentFixture<HomeChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HomeChildComponent]
    });
    fixture = TestBed.createComponent(HomeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

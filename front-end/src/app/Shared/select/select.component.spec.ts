import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlecetComponent } from './select.component';

describe('SlecetComponent', () => {
  let component: SlecetComponent;
  let fixture: ComponentFixture<SlecetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlecetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlecetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

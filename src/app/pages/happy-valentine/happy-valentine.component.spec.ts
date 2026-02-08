import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyValentineComponent } from './happy-valentine.component';

describe('HappyValentineComponent', () => {
  let component: HappyValentineComponent;
  let fixture: ComponentFixture<HappyValentineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HappyValentineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HappyValentineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

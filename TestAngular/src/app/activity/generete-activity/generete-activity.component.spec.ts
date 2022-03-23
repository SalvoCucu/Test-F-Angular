import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenereteActivityComponent } from './generete-activity.component';

describe('GenereteActivityComponent', () => {
  let component: GenereteActivityComponent;
  let fixture: ComponentFixture<GenereteActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenereteActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenereteActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

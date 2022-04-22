import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NGFormsComponent } from './ngforms.component';

describe('NGFormsComponent', () => {
  let component: NGFormsComponent;
  let fixture: ComponentFixture<NGFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NGFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NGFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

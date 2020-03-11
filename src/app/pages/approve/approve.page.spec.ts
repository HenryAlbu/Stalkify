import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovePage } from './approve.page';

describe('ApprovePage', () => {
  let component: ApprovePage;
  let fixture: ComponentFixture<ApprovePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

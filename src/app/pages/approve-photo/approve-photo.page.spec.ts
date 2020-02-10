import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovePhotoPage } from './approve-photo.page';

describe('ApprovePhotoPage', () => {
  let component: ApprovePhotoPage;
  let fixture: ComponentFixture<ApprovePhotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovePhotoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovePhotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

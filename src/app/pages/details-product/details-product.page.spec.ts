import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsProductPage } from './details-product.page';

describe('DetailsProductPage', () => {
  let component: DetailsProductPage;
  let fixture: ComponentFixture<DetailsProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsProductPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

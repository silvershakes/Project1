import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Enter2Component } from './enter2.component';

describe('Enter2Component', () => {
  let component: Enter2Component;
  let fixture: ComponentFixture<Enter2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Enter2Component]
    });
    fixture = TestBed.createComponent(Enter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

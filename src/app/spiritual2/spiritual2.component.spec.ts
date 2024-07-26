import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spiritual2Component } from './spiritual2.component';

describe('Spiritual2Component', () => {
  let component: Spiritual2Component;
  let fixture: ComponentFixture<Spiritual2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Spiritual2Component]
    });
    fixture = TestBed.createComponent(Spiritual2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

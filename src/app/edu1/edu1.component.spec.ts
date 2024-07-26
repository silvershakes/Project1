import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Edu1Component } from './edu1.component';

describe('Edu1Component', () => {
  let component: Edu1Component;
  let fixture: ComponentFixture<Edu1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Edu1Component]
    });
    fixture = TestBed.createComponent(Edu1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

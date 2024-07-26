import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Edu2Component } from './edu2.component';

describe('Edu2Component', () => {
  let component: Edu2Component;
  let fixture: ComponentFixture<Edu2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Edu2Component]
    });
    fixture = TestBed.createComponent(Edu2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

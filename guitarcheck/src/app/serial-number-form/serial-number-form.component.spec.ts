import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerialNumberFormComponent } from './serial-number-form.component';

describe('SerialNumberFormComponent', () => {
  let component: SerialNumberFormComponent;
  let fixture: ComponentFixture<SerialNumberFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerialNumberFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerialNumberFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

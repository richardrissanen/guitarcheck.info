import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerialNumberFormComponent } from './serial-number-form.component';
import { FormsModule } from '@angular/forms';


describe('SerialNumberFormComponent', () => {
  let component: SerialNumberFormComponent;
  let fixture: ComponentFixture<SerialNumberFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerialNumberFormComponent ],
      imports: [ FormsModule ]
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

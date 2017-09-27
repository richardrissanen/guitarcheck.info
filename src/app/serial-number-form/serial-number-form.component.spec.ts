import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

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

  it('should have #serial-number', () => {
    const serialNumber = fixture.debugElement.query(By.css('input#serial-number'));
    const element = serialNumber.nativeElement;

    expect(element).toEqual(jasmine.anything());
  });

  it('should have #country', () => {
    const country = fixture.debugElement.query(By.css('select#country'));
    const element = country.nativeElement;

    expect(element).toEqual(jasmine.anything());
  });

  it('should have input[type="submit"]', () => {
    const submit = fixture.debugElement.query(By.css('input[type="submit"]'));
    const element = submit.nativeElement;

    expect(element).toEqual(jasmine.anything());
  });
});

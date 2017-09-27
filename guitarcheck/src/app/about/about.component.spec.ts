import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain #disclaimer', () => {
    const disclaimer = fixture.debugElement.query(By.css('#disclaimer'));
    const element = disclaimer.nativeElement;

    expect(element).toEqual(jasmine.anything());
  });

  it('should contain #references', () => {
    const references = fixture.debugElement.query(By.css('#references'));
    const element = references.nativeElement;

    expect(element).toEqual(jasmine.anything());
  });

  it('should contain #contributions', () => {
    const contributions = fixture.debugElement.query(By.css('#contributions'));
    const element = contributions.nativeElement;

    expect(element).toEqual(jasmine.anything());
  });
});

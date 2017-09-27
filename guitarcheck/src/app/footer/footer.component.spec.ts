import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have twitter link with correct url', () => {
    const anchor = fixture.debugElement.query(By.css('#twitter'));
    const twitter = anchor.nativeElement;
    
    expect(twitter).toEqual(jasmine.anything());
    expect(anchor.attributes.href).toEqual('https://twitter.com/thekarmakazie')
  });

  it('should have author link with correct url', () => {
    const anchor = fixture.debugElement.query(By.css('#author'));
    const author = anchor.nativeElement;
    
    expect(author).toEqual(jasmine.anything());
    expect(anchor.attributes.href).toEqual('http://richardrissanen.com')
  });

  it('should have home link with correct url', () => {
    const anchor = fixture.debugElement.query(By.css('#home'));
    const home = anchor.nativeElement;
    
    expect(home).toEqual(jasmine.anything());
    expect(anchor.attributes.routerLink).toEqual('/')
    expect(home.textContent).toEqual('home')
  });

  it('should have about link with correct url', () => {
    const anchor = fixture.debugElement.query(By.css('#about'));
    const about = anchor.nativeElement;
    
    expect(about).toEqual(jasmine.anything());
    expect(anchor.attributes.routerLink).toEqual('/about')
    expect(about.textContent).toEqual('about')    
  });

  it('should have faq link with correct url', () => {
    const anchor = fixture.debugElement.query(By.css('#faq'));
    const faq = anchor.nativeElement;
    
    expect(faq).toEqual(jasmine.anything());
    expect(anchor.attributes.routerLink).toEqual('/faq')
    expect(faq.textContent).toEqual('faq')    
  });
  it('should have copy-link link with correct url', () => {
    const anchor = fixture.debugElement.query(By.css('#copy-link'));
    const copyLink = anchor.nativeElement;
    
    expect(copyLink).toEqual(jasmine.anything());
    expect(anchor.attributes.routerLink).toEqual('/')
    expect(copyLink.textContent).toEqual('guitarcheck.info')       
  });
});

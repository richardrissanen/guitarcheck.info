import { AppPage } from './app.po';
import { element, by, browser, protractor } from 'protractor';

describe('guitarcheck App', () => {
  let page: AppPage;
  const EC = protractor.ExpectedConditions;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display #sn-required-alert with NO serial number', () => {
    page.navigateTo();

    const requiredAlert = element(by.css('#sn-required-alert'));
    expect(browser.wait(EC.visibilityOf(requiredAlert), 1000)).toEqual(true);
  });

  it('should NOT display serial numbers alerts with serial number greater than 6 characters', () => {
    page.navigateTo();
    element(by.css('#serial-number')).sendKeys('mn345678');

    const lengthAlert = element(by.css('#sn-length-alert'));
    expect(browser.wait(EC.invisibilityOf(lengthAlert), 1000)).toEqual(true);
    const requiredAlert = element(by.css('#sn-required-alert'));
    expect(browser.wait(EC.invisibilityOf(requiredAlert), 1000)).toEqual(true);
  });

  it('should display #sn-length-alert with serial number less than 5 characters', () => {
    page.navigateTo();
    element(by.css('#serial-number')).sendKeys('mn345');

    const lengthAlert = element(by.css('#sn-length-alert'));
    expect(browser.wait(EC.visibilityOf(lengthAlert), 1000)).toEqual(true);
    const requiredAlert = element(by.css('#sn-required-alert'));
    expect(browser.wait(EC.invisibilityOf(requiredAlert), 1000)).toEqual(true);
  });

  it('should NOT allow submission when #serial-number is empty and #country is NOT selected', () => {
    page.navigateTo();

    const submitButton = element(by.css('input[type="submit"]'));
    expect(submitButton.isEnabled()).toEqual(false);
  });

  it('should NOT allow submission when #serial-number is valid and #country is NOT selected', () => {
    page.navigateTo();
    element(by.css('#serial-number')).sendKeys('mn345678');    

    const submitButton = element(by.css('input[type="submit"]'));
    expect(submitButton.isEnabled()).toEqual(false);
  });

  it('should display #country-alert with NO country selected', () => {
    page.navigateTo();

    const countryAlert = element(by.css('#country-alert'));
    expect(browser.wait(EC.visibilityOf(countryAlert), 1000)).toEqual(true);
  });

  it('should NOT display #country-alert when country is selected', () => {
    page.navigateTo();
    element(by.css('#country')).sendKeys('MEXICO');    

    const countryAlert = element(by.css('#country-alert'));
    expect(browser.wait(EC.invisibilityOf(countryAlert), 1000)).toEqual(true);
  });

  it('should allow submission when #serial-number is valid and #country is selected', () => {
    page.navigateTo();
    element(by.css('#serial-number')).sendKeys('mn345678');
    element(by.css('#country')).sendKeys('MEXICO');

    const submitButton = element(by.css('input[type="submit"]'));
    expect(submitButton.isEnabled()).toEqual(true);
  });

  it('should show alert when submission is valid', () => {
    page.navigateTo();
    element(by.css('#serial-number')).sendKeys('mn345678');
    element(by.css('#country')).sendKeys('MEXICO');

    const submitButton = element(by.css('input[type="submit"]'));
    submitButton.click();

    browser.wait(EC.alertIsPresent(), 5000);
  });

});

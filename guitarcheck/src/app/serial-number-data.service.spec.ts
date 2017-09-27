import { TestBed, inject } from '@angular/core/testing';

import { SerialNumberDataService } from './serial-number-data.service';

describe('SerialNumberDataService', () => {
  const countryArray = ['china', 'india', 'indonesia', 'japan', 'korea', 'mexico', 'united states']

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SerialNumberDataService]
    });
  });

  it('should be created', inject([SerialNumberDataService], (service: SerialNumberDataService) => {
    expect(service).toBeTruthy();
  }));
  it('should return an object of squier countries with correct number of serial number prefixes', inject([SerialNumberDataService], (service: SerialNumberDataService) => {
    const response = service.fetch_company('squier')

    expect(response).toEqual(jasmine.anything());
    expect(Object.keys(response)).toEqual(countryArray)

    expect(response.china.minimumPrefixSize).toEqual(jasmine.anything());
    expect(response.india.minimumPrefixSize).toEqual(jasmine.anything());
    expect(response.indonesia.minimumPrefixSize).toEqual(jasmine.anything());
    expect(response.japan.minimumPrefixSize).toEqual(jasmine.anything());
    expect(response.korea.minimumPrefixSize).toEqual(jasmine.anything());
    expect(response.mexico.minimumPrefixSize).toEqual(jasmine.anything());
    expect(response['united states'].minimumPrefixSize).toEqual(jasmine.anything());
    
    expect(response.china.maximumPrefixSize).toEqual(jasmine.anything());
    expect(response.india.maximumPrefixSize).toEqual(jasmine.anything());
    expect(response.indonesia.maximumPrefixSize).toEqual(jasmine.anything());
    expect(response.japan.maximumPrefixSize).toEqual(jasmine.anything());
    expect(response.korea.maximumPrefixSize).toEqual(jasmine.anything());
    expect(response.mexico.maximumPrefixSize).toEqual(jasmine.anything());
    expect(response['united states'].maximumPrefixSize).toEqual(jasmine.anything());

    expect(Object.keys(response.china).length).toEqual(164);
    expect(Object.keys(response.india).length).toEqual(19);
    expect(Object.keys(response.indonesia).length).toEqual(90);
    expect(Object.keys(response.japan).length).toEqual(25);
    expect(Object.keys(response.korea).length).toEqual(94);
    expect(Object.keys(response.mexico).length).toEqual(9);
    expect(Object.keys(response['united states']).length).toEqual(8);

  }));
  it('should return an array of countries', inject([SerialNumberDataService], (service: SerialNumberDataService) => {
    const response = service.fetch_countries_for_a_company('squier');
    expect(response).toEqual(jasmine.anything());
    expect(response).toEqual(countryArray)
  }));
  it('should return an array with only squier', inject([SerialNumberDataService], (service: SerialNumberDataService) => {
    const response = service.fetch_companies();
    expect(response).toEqual(jasmine.anything());
    expect(response).toEqual(['squier']);
  }));
});

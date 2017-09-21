import { Component, OnInit, HostListener } from '@angular/core';
import {NgForm} from '@angular/forms';

import { SerialNumberDataService } from '../serial-number-data.service';

@Component({
  providers: [SerialNumberDataService],
  selector: 'app-serial-number-form',
  templateUrl: './serial-number-form.component.html',
  styleUrls: ['./serial-number-form.component.css']
})
export class SerialNumberFormComponent implements OnInit {
  manufacturerData: object
  countries: Array<string>
  countryOfOrigin: string
  serialNumber: string
  company = 'squier'

  constructor(private dataService: SerialNumberDataService) { }

  ngOnInit() {
    this.manufacturerData = this.dataService.fetch_company(this.company);
    this.countries = this.dataService.fetch_countries_for_a_company(this.company)
  }

  onSubmit() {
    // compare input to manufacturerData and display result
    const origin = this.manufacturerData[this.countryOfOrigin]
    const minSize = origin.minimumPrefixSize
    const maxSize = origin.maximumPrefixSize

    let year;
    
    for (var i = maxSize; i >= minSize; i--) {

      const serialNumberPrefix = this.serialNumber.substring(0, i)
      year = origin[serialNumberPrefix]

      if (typeof year !== 'undefined') { break }
    }

    const message = 'Your ' + this.company + ' guitar is from ' + year
    alert(message)
    
  }

}

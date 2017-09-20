import { Component, OnInit } from '@angular/core';
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

  constructor(private dataService: SerialNumberDataService) { }

  ngOnInit() {
    this.manufacturerData = this.dataService.fetch_company('squier');
    this.countries = this.dataService.fetch_countries_for_a_company('squier')
  }
  
  onSubmit() {
    // this.manufacturerData[this.countryOfOrigin]
    // compare input to manufacturerData and display result
  }

}

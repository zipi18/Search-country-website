import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent  {
  title = ""
  @Input()
  dataArr: any[];
  constructor(private dataService: DataService) { }

}



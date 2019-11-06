import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  data1: any[];
  constructor(private http: HttpClient) {
    const path = "https://restcountries.eu/rest/v2/all";
    http.get(path)
      .subscribe(
        (d: any) => {
          this.data1 = d;
        }
        , () => {
        });
  }
}


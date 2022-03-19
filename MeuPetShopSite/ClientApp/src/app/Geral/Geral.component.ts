import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-Geral',
  templateUrl: './Geral.component.html'
})
export class GeralComponent {
 /* public forecasts: WeatherForecast[];*/

  //constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
  //  http.get<WeatherForecast[]>(baseUrl + 'weatherforecast').subscribe(result => {
  //    this.forecasts = result;
  //  }, error => console.error(error));
  //}
}


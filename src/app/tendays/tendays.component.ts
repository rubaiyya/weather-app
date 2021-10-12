import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-tendays',
  templateUrl: './tendays.component.html',
  styleUrls: ['./tendays.component.scss']
})
export class TendaysComponent implements OnInit {

  weatherData: any;

  constructor(
    private weatherService: WeatherService
  ) {
    this.weatherData = this.weatherService.weatherdata;
    
    this.weatherService.dataUpdated.subscribe(() => {
      this.weatherData = this.weatherService.weatherdata;
      this.generateData(this.weatherData.daily);
    })
  }

  ngOnInit(): void {
  }

  generateData(weatherData: any) {
    for (let day of weatherData) {
      console.log("Daily data: ", day);
    }
  }

}

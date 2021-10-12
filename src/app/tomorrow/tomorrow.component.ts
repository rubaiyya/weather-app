import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-tomorrow',
  templateUrl: './tomorrow.component.html',
  styleUrls: ['./tomorrow.component.scss']
})
export class TomorrowComponent implements OnInit {

  weatherData: any;

  constructor(private weatherService: WeatherService
    ) {
      this.weatherData = this.weatherService.weatherdata;
      
      this.weatherService.dataUpdated.subscribe(() => {
        this.weatherData = this.weatherService.weatherdata;
      })
    }

  ngOnInit(): void {
  }

}

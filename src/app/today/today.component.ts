import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ScaleType } from '@swimlane/ngx-charts';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {

  weatherData: any;
  seriesData = new Array();

  view = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = false;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Hours';
  yAxisLabel: string = 'Temp';
  timeline: boolean = true;

  colorScheme = {
    name: "custom",
    selectable: true,
    group: ScaleType.Linear,
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(
      private weatherService: WeatherService
    ) {
      this.weatherData = this.weatherService.weatherdata;
      if (this.weatherData) {
        this.generateSeriesData(this.weatherData);
      }

      this.weatherService.dataUpdated.subscribe(() => {
        this.weatherData = this.weatherService.weatherdata;
        this.generateSeriesData(this.weatherData);
      });
    }

  ngOnInit(): void {
  }

  generateSeriesData(weatherData: any) {
    let data = {
      "name" : "Temperature",
      "series" : new Array()
    };
    for (var hour of weatherData.hourly.slice(0,6)) {
      let hourly = {
        "name" : formatDate(hour.dt * 1000, 'shortTime', 'en'),
        "value" : hour.temp
      }
      data.series.push(hourly);
    }
    this.seriesData.push(data);
  }

}

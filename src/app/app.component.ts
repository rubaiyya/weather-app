import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather';
  city: any;
  checkoutForm = this.formBuilder.group({
    location: ''
  });
  constructor(
    private formBuilder: FormBuilder,
    private weatherService: WeatherService
  ) {
    this.weatherService.dataUpdated.subscribe(() => {
      this.city = this.weatherService.city;
    });
  }

  ngOnInit() {
    this.getUserLocation();
  }

  getUserLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
        console.log('lat: ', position.coords.latitude, ' lon: ', position.coords.longitude);
        this.weatherService.updateWeatherData(position.coords.longitude.toString(), position.coords.latitude.toString());
      },() => {
        console.warn('Location access not provided!');
      },{timeout:10000}
    )
  }

  onSubmit(): void {
    const location = this.checkoutForm.value.location    
    this.weatherService.updateWeatherDataFromCity(location);
    this.checkoutForm.reset();
  }
}

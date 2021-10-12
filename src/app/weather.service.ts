import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weatherApiUrl = 'https://api.openweathermap.org/data/2.5/onecall';
  geoApiUrl = 'http://api.openweathermap.org/geo/1.0/direct';
  reverseApiUrl ='http://api.openweathermap.org/geo/1.0/reverse';

  geodata: any;
  weatherdata: any;
  city: any;

  dataUpdated: EventEmitter<string> = new EventEmitter();

  constructor( private http: HttpClient) { }

  async updateWeatherDataFromCity(location: string) {
    await this.getGeoData(location);
    await this.updateWeatherData(this.geodata[0].lon, this.geodata[0].lat);
  }

  async updateWeatherData(longitude: string, latitude: string) {
    let httpparams = new HttpParams()
      .set('lat', latitude)
      .set('lon', longitude)
      .set('exclude', 'minutely');
    this.weatherdata = await this.http.get(this.weatherApiUrl, { params : httpparams }).toPromise();
    await this.getCity(longitude, latitude);
    this.dataUpdated.emit();
  }

  async getGeoData(location: string){
    let httpparams = new HttpParams().set('q', location);;
    this.geodata = await this.http.get(this.geoApiUrl, { params : httpparams }).toPromise();
  }

  async getCity(longitude: string,latitude: string){
    let httpparams = new HttpParams()
      .set('lat', latitude)
      .set('lon', longitude)
    this.city = await this.http.get(this.reverseApiUrl,{params : httpparams}).toPromise();
  }
}

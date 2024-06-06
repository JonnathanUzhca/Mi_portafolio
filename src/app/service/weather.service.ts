import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl= 'https://api.weatherapi.com/v1/current.json?key=0427e40e39e14e63ae551016240606&q=Ecuador/Cuenca&aqi=no';

  constructor( private http :HttpClient ) { }

  getWeather(){
    return this.http.get<any>(this.apiUrl);
  }
}

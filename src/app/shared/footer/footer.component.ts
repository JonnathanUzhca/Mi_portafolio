import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/core/interface/weather';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent  implements OnInit {

  public weather : Weather;

  constructor( private weatherService:  WeatherService  ){

  }
  
  ngOnInit(): void {
    this.onLoaDataWeather();
  }

   async onLoaDataWeather(){
     await this.weatherService.getWeather()
    .subscribe((item) => {
      this.weather = item
    },
    error =>{
      console.error(error)
    }
  ) 
  }

}

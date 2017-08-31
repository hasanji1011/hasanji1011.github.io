import { Component, OnInit } from '@angular/core';
import { MapDataService } from './../map-data.service';
import { WeatherServiceService } from './../weather-service.service';
// import { Skycons } from 'skycons';
// declare var skycons :any;
declare var require:any;
const Skycons = require('assets/js/skycons.js');

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css'],
  providers : [WeatherServiceService]
})
export class Dashboard1Component implements OnInit {
  totalUser;
  averageTime;
  totalMales;
  totalFemales;
  totalCollections;
  totalConnections;
  facebook_camp;
  twitter_camp;
  conventional_camp;
  billboard_camp;
  cord;
  val={
      data1:[],
      data2:[],
      types:''
  };
  val2={
      data:[],
      typeOfChart:''
  };

  isCelcius=true;
  skycons;
  worldMapData;
  weatherData;
  currentTemp;
  currentWeatherCondition = {tempC:"",tempF:"",city:"",weather:"",icon:""};
  Timestamp={day:"",time:""};
  forcastWeatherData;
  forecastData = [];
  constructor(private mapDataService:MapDataService, private weather:WeatherServiceService) {
    this.totalUser = 2500;
    this.averageTime = 123.50;
    this.totalMales = 2500;
    this.totalFemales = 4567;
    this.totalCollections = 2315;
    this.totalConnections = 7325;
    this.val.data1=[ 369, 640,
                    1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
                    27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
                    26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
                    24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
                    22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
                    10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104];
    this.val.types='area';
    this.val.data2=[
                    5, 25, 50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322,
                    4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
                    15915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,
                    33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000, 37000,
                    35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
                    21000, 20000, 19000, 18000, 18000, 17000, 16000];
    this.mapDataService.getMap().subscribe(data => {
      this.worldMapData = data.mapCountries;
    })
    this.val2.data= [
      { name: 'IOS', y: 30, color: 'blue'},
      { name: 'Android', y: 10, color: 'green' },
      { name: 'Blackberry', y: 20, color: 'purple' },
      { name: 'Symbian', y: 15, color: 'aero' },
      { name: 'Others', y: 30, color: 'red' }
    ];
    this.val2.typeOfChart='pie';
    this.facebook_camp = 76;
    this.twitter_camp = 50;
    this.conventional_camp = 45;
    this.billboard_camp = 33;
    this.getLocation();
   }
   getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.gLatLon.bind(this));
        console.log("navigation true");
    } else { 
      console.log("navigation false");
    }
  }
  gLatLon(position){
    console.log(position.coords.latitude);
    this.cord = position.coords.latitude +","+position.coords.longitude ;
    console.log("Geo Location: "+this.cord);
    //console.log(this.geoLoc);
    this.weather.getLocWeather(this.cord).subscribe((res) => {
      this.weatherData = res.current_observation;
      console.log(res);
        this.currentWeatherCondition.city= this.weatherData.display_location.city;
        this.currentWeatherCondition.weather = this.weatherData.weather;
        this.currentWeatherCondition.icon = "https://icons.wxug.com/i/c/i/"+this.weatherData.icon+".gif";
        this.currentTemp=this.currentWeatherCondition.tempC = this.weatherData.temp_c;
        this.currentWeatherCondition.tempF = this.weatherData.temp_f;
        console.log(this.currentWeatherCondition.icon);
      },
      (err) => {this.currentWeatherCondition.tempC = "Check your Internet Connection"} 
    );
    this.weather.getLocWeatherForecast().subscribe((res) => {
          this.forcastWeatherData = res.forecast.simpleforecast.forecastday;
  
          for(let i=1; i< 7; i++){
            this.forecastData.push({
              "temp":this.forcastWeatherData[i].high.celsius,
              "day":this.forcastWeatherData[i].date.weekday_short,
              "icon":"https://icons.wxug.com/i/c/i/"+this.forcastWeatherData[i].icon +".gif",
              "wind":this.forcastWeatherData[i].maxwind.kph,
              "tempF":this.forcastWeatherData[i].high.fahrenheit
            })
          }
          console.log(this.forecastData);
        }
      );
  }

   convertTemp(temp){
     console.log("temp: "+temp+" -> isCelcius: "+this.isCelcius);
    if(temp == 'C' && this.isCelcius || temp == 'F' && !(this.isCelcius)){

    }
    else{
      this.isCelcius = this.isCelcius? false : true;
    }
   }

  ngOnInit() {
      var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      let date = new Date();
      this.Timestamp.day = days[date.getDay()];
      setInterval(()=>{this.Timestamp.time = date.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});},5000);
  }

}

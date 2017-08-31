import { Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class WeatherServiceService {
  lat;
  lon;
  weatherUrl;
  forecastUrl;
  constructor(private http:Http) { 
    
  }
  ngOnInit(){
   // this.getLocation();
  }
//http://api.wunderground.com/api/53e8536315b17168/geolookup/q/37.776289,-122.395234.json
// getLocation() {
//   if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(this.generateQuery);
//   } else { 
//       this.generateQuery(null)
//   }
//   console.log("Geo Location"+navigator.geolocation)
// }

generateQuery(position){
  // this.forecastUrl = "http://api.wunderground.com/api/53e8536315b17168/forecast7day/q/India/New_Delhi.json";
  // this.weatherUrl="http://api.wunderground.com/api/53e8536315b17168/conditions/q/India/New_Delhi.json";
  if(position == ''){
    this.weatherUrl="http://api.wunderground.com/api/53e8536315b17168/conditions/q/India/New_Delhi.json";
    this.forecastUrl = "http://api.wunderground.com/api/53e8536315b17168/forecast7day/q/India/New_Delhi.json";
  }
  else{
    console.log(position);
    // this.lat = position.lat;
    // this.lon = position.lon;
    this.weatherUrl = "http://api.wunderground.com/api/53e8536315b17168/conditions/geolookup/q/"+position+".json";
    this.forecastUrl = "http://api.wunderground.com/api/53e8536315b17168/forecast7day/q/"+position+".json";
    console.log('url created');
    //this.forecastUrl="http://api.wunderground.com/api/53e8536315b17168/forecast7day/geolookup/q/"+this.lat+","+this.lon+".json";
  }
}
  getWeather():Observable<any>{
    return this.http.get(this.weatherUrl)
    .map((res)=>res.json())
    .catch((err)=>err.json());
  }

  getLocWeather(location):Observable<any>{
    this.generateQuery(location);
    console.log("url fired")
    return this.http.get(this.weatherUrl)
    .map((res)=>res.json())
    .catch((err)=>err.json());
  }

  getWeatherForecast():Observable<any>{
    return this.http.get(this.forecastUrl)
    .map((res)=>res.json())
    .catch((err)=>err.json());
  }
  getLocWeatherForecast():Observable<any>{
    return this.http.get(this.forecastUrl)
    .map((res)=>res.json())
    .catch((err)=>err.json());
  }

  // getWeather():Observable<any>{
  //   return this.http.get("http://api.wunderground.com/api/53e8536315b17168/conditions/geolookup/q/"+this.lat+","+this.lon+".json")
  //   .map((res)=>res.json())
  //   .catch((err)=>err.json());
  // }

  // getWeatherForecast():Observable<any>{
  //   return this.http.get("http://api.wunderground.com/api/53e8536315b17168/forecast7day/geolookup/q/"+this.lat+","+this.lon+".json")
  //   .map((res)=>res.json())
  //   .catch((err)=>err.json());
  // }
}

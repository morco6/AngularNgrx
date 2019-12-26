import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private API_URL = 'http://dataservice.accuweather.com';
  private API_KEY = 'QTzs8QlcN7l9GvHM2O6H5XXqHruxiGGx';
  private CURRENT_WEATHER = 'currentconditions/v1';
  private NEXT_5_DAYS = 'forecasts/v1/daily/5day';
  private LOCATIONS = 'locations/v1/cities/autocomplete';


  constructor(private http:HttpClient) {}

  
  getLocationId(name : string){
    const data = { apikey:this.API_KEY, q:name };
    const url = `${this.API_URL}/${this.LOCATIONS}`;
    return this.http.get(url, { params: data });
  }


  getCurrentWeather(id : string){
    const url = `${this.API_URL}/${this.CURRENT_WEATHER}/${id}`;
    return this.http.get(url, { params: { apikey:this.API_KEY } });
  }


  getNext5days(id : string){
    const data = { apikey: this.API_KEY, metric: 'true' };
    const url = `${this.API_URL}/${this.NEXT_5_DAYS}/${id}`;
    return this.http.get(url, { params: data });
  }


}

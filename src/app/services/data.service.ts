import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  GetData(city: string){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=898b33ba923b0e5c0a15511f1afbd3aa&units=metric`);
  }
}

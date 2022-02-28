import { Component, OnInit } from '@angular/core';
import { DataService} from '../services/data.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public inputValue: string = '';
  constructor(private service: DataService) { }
  public weatherReports: any;
  public cityName: string = '';
  public currentTemperature: string = ''
  public feelLike: string = ''
  public max: string = ''
  public min: string = ''
  public main: string = ''
  getValue(value: string){
    this.inputValue = value
    console.log(this.inputValue)
    this.service.GetData(this.inputValue).subscribe((data: any) => {
      this.weatherReports = data;
      this.cityName = data.name
      this.currentTemperature = data.main.temp
      this.main = data.weather[0].main
      this.feelLike = data.main.feels_like
      this.max = data.main.temp_max
      this.min = data.main.temp_min
      console.log(this.main)
    });
  }
  

  ngOnInit(): void {
  }

}

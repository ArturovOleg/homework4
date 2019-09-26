import { Component, OnInit, Input } from "@angular/core";
import { Weather } from "../hotels/hotels.component";

@Component({
  selector: "app-weather-widget",
  templateUrl: "./weather-widget.component.html",
  styleUrls: ["./weather-widget.component.scss"]
})
export class WeatherWidgetComponent implements OnInit {
  @Input()
  weather: Weather;

  constructor() {}

  ngOnInit() {}
}

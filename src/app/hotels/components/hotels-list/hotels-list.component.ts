import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Hotel } from "../hotels/hotels.component";

@Component({
  selector: "app-hotels-list",
  templateUrl: "./hotels-list.component.html",
  styleUrls: ["./hotels-list.component.scss"]
})
export class HotelsListComponent implements OnInit {
  @Input()
  hotels: Hotel[];
  @Input()
  currentHotel: Hotel;
  @Output()
  changeHotel: EventEmitter<Hotel> = new EventEmitter();
  @Output() addToFavorite: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  public selectHotel(changeHotel) {
    this.changeHotel.emit(changeHotel);
  }

  public addToFavoriteHotels(id: number): void {
    this.addToFavorite.emit(id);
  }
}

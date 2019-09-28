import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Hotel } from "../hotels/hotels.component";

export interface HotelStars {
  value: number;
  viewValue: string;
}

@Component({
  selector: "app-hotels-list",
  templateUrl: "./hotels-list.component.html",
  styleUrls: ["./hotels-list.component.scss"]
})
export class HotelsListComponent implements OnInit {
  byNameIsClicked: Boolean = false;
  byDescIsClicked: Boolean = false;
  byStarsIsClicked: Boolean = false;
  byStars: Number = 0;
  hotelsStars: HotelStars[] = [
    { value: 0, viewValue: "all hotels" },
    { value: 3, viewValue: "***" },
    { value: 4, viewValue: "****" },
    { value: 5, viewValue: "*****" }
  ];
  public byName: string = "";
  public byDescription: string = "";

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

  searchByName() {
    this.byNameIsClicked = true;
  }

  closeSearchByName() {
    this.byNameIsClicked = false;
  }

  public searchingByName(value: string): void {
    this.byName = value;
  }

  searchByDesc() {
    this.byDescIsClicked = true;
  }

  closeSearchByDesc() {
    this.byDescIsClicked = false;
  }

  public searchingByDesc(value: string): void {
    this.byDescription = value;
  }

  searchByStars() {
    this.byStarsIsClicked = true;
  }

  closeSearchByStars() {
    this.byStarsIsClicked = false;
  }
}

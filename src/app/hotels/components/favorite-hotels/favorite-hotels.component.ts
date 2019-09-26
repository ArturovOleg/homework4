import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Hotel } from "../hotels/hotels.component";

@Component({
  selector: "app-favorite-hotels",
  templateUrl: "./favorite-hotels.component.html",
  styleUrls: ["./favorite-hotels.component.scss"]
})
export class FavoriteHotelsComponent implements OnInit {
  @Input() favoriteHotels: Hotel[];
  @Output() delFavoriteHotel: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public deleteFavoriteHotel(id: number) {
    this.delFavoriteHotel.emit(id);
  }
}

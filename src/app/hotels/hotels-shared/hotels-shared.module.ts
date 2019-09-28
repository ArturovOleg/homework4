import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { SearchingHotelPipe } from "./pipes/search-hotel.pipe";

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SearchingHotelPipe],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent, SearchingHotelPipe]
})
export class HotelsSharedModule {}

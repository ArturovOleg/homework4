import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HotelsComponent } from "./components/hotels/hotels.component";
import { HotelsSharedModule } from "./hotels-shared/hotels-shared.module";
import { HotelsListComponent } from './components/hotels-list/hotels-list.component';
import { WeatherWidgetComponent } from './components/weather-widget/weather-widget.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FavoriteHotelsComponent } from './components/favorite-hotels/favorite-hotels.component';

@NgModule({
  declarations: [HotelsComponent, HotelsListComponent, WeatherWidgetComponent, ProfileComponent, FavoriteHotelsComponent],
  imports: [CommonModule, HotelsSharedModule],
  exports: [HotelsComponent]
})
export class HotelsModule {}

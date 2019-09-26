import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelsModule } from './hotels/hotels.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HotelsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

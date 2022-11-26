import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsBadgeModule } from '@mintplayer/ng-bootstrap';
// import { BsNavbarModule } from '@mintplayer/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { DirectivesModule } from './directives/directives.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // BsNavbarModule,
    // DirectivesModule,
    BsBadgeModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

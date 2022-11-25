import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BsNavbarModule } from '@mintplayer/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesModule } from './directives/directives.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BsNavbarModule,
    DirectivesModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

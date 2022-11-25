import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BsNavbarModule } from '@mintplayer/ng-bootstrap';
import ngBootstrapJson from '@mintplayer/ng-bootstrap/package.json';

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
  providers: [{
    provide: 'BOOTSTRAP_VERSION',
    useValue: ngBootstrapJson.version
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

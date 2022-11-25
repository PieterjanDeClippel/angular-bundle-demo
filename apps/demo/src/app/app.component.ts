import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(@Inject('BOOTSTRAP_VERSION') bootstrapVersion: string) {
    this.versionInfo = bootstrapVersion;
  }
  
  versionInfo = '';
}

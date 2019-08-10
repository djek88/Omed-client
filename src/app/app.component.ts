import { Component } from '@angular/core';

import { LoopBackConfig } from './core/sdk';
import { environment } from '../environments/environment';

@Component({
  selector: 'omed-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    LoopBackConfig.setBaseURL(environment.apiBaseUrl);
    LoopBackConfig.setApiVersion(environment.apiVersion);
  }
}

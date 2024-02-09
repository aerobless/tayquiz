import {Component, HostBinding} from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  @HostBinding('attr.app-version') appVersionAttr = environment.appVersion;

  constructor() {}
}

import { Component } from '@angular/core';
import {IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonText, IonImg} from '@ionic/angular/standalone';
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonText, IonImg],
})
export class HomePage {
  constructor(private router: Router) {}

  navigateToEmojiQuiz(): void {
    this.router.navigate(['/emoji-quiz']);
  }

  protected readonly environment = environment;
}

import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {QuizmasterService} from "../service/quizmaster/quizmaster.service";
import {Question} from "../service/quizmaster/question";
import {NgForOf} from "@angular/common";
import {
  IonButton, IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonText,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";

@Component({
  selector: 'app-emoji-quiz',
  templateUrl: './emoji-quiz.page.html',
  styleUrls: ['./emoji-quiz.page.scss'],
  standalone: true,
  imports: [
    NgForOf,
    IonButton,
    IonText,
    IonList,
    IonItem,
    IonLabel,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonContent
  ]
})
export class EmojiQuizPage implements OnInit {

  constructor(private router: Router, private quizmaster: QuizmasterService) {}

  currentQuestion: Question | undefined;
  nextQuestionNumber: number = 0;

  ngOnInit() {
    this.nextQuestion();
  }

  verify(choice: boolean): void {
    if(choice){
      alert("correct")
    }else{
      alert("false")
    }
  }

  navigateHome(): void {
    this.nextQuestionNumber = 0;
    this.router.navigate(['/home']);
  }

  protected nextQuestion(): void {
    this.currentQuestion = this.quizmaster.getQuestions()[this.nextQuestionNumber];
    this.nextQuestionNumber++;
  }

}

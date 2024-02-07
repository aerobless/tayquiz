import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {QuizmasterService} from "../service/quizmaster/quizmaster.service";
import {Question} from "../service/quizmaster/question";
import {NgForOf, NgIf} from "@angular/common";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonText,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";
import {addIcons} from "ionicons";
import {heartOutline, sadOutline} from "ionicons/icons";
import {QuizState} from "./model/quiz-state";

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
    IonContent,
    IonIcon,
    NgIf
  ]
})
export class EmojiQuizPage implements OnInit {

  constructor(private router: Router, private quizmaster: QuizmasterService) {
    addIcons({heartOutline});
    addIcons({sadOutline});
  }

  currentQuestion: Question | undefined;
  nextQuestionNumber: number = 0;
  quizstate: QuizState = QuizState.QUESTION;

  ngOnInit() {
    this.nextQuestion();
  }

  verify(choice: boolean): void {
    if(choice){
      this.quizstate = QuizState.ANSWER_CORRECT;
    }else{
      this.quizstate = QuizState.ANSWER_WRONG;
    }
  }

  navigateHome(): void {
    this.nextQuestionNumber = 0;
    this.router.navigate(['/home']);
  }

  protected nextQuestion(): void {
    this.quizstate = QuizState.QUESTION;
    this.currentQuestion = this.quizmaster.getQuestions()[this.nextQuestionNumber];
    this.nextQuestionNumber++;
  }

  protected readonly QuizState = QuizState;
}

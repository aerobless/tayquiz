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

  constructor(private router: Router, protected quizmaster: QuizmasterService) {
    addIcons({heartOutline});
    addIcons({sadOutline});
  }

  currentQuestion: Question | undefined;
  nextQuestionNumber: number = 0;
  quizstate: QuizState = QuizState.QUESTION;

  correctAnswers: number = 0;

  ngOnInit() {
    this.nextQuestion();
  }

  verify(choice: boolean): void {
    if(choice){
      this.quizstate = QuizState.ANSWER_CORRECT;
      this.correctAnswers++;
    }else{
      this.quizstate = QuizState.ANSWER_WRONG;
    }
  }

  navigateHome(): void {
    this.nextQuestionNumber = 0;
    this.nextQuestion();
    this.router.navigate(['/home']);
  }

  showResults(): void {
    this.quizstate = QuizState.RESULT;
  }

  protected nextQuestion(): void {
    if(this.nextQuestionNumber == this.quizmaster.getQuestions().length){
      // Out of questions...
      this.quizstate = QuizState.RESULT;
    } else {
      this.quizstate = QuizState.QUESTION;
      this.currentQuestion = this.quizmaster.getQuestions()[this.nextQuestionNumber];
      this.pseudoRandomiseAnswerOrder();
      this.nextQuestionNumber++;
    }
  }

  private pseudoRandomiseAnswerOrder(): void {
    if (this.currentQuestion?.answers) {
      this.currentQuestion.answers = this.currentQuestion.answers.sort(() => Math.random() - 0.5);
    }
  }

  protected readonly QuizState = QuizState;
}

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

  questions: Question[] = this.quizmaster.getQuestions();
  currentQuestion: Question | undefined;
  nextQuestionNumber: number = 0;
  quizState: QuizState = QuizState.QUESTION;

  correctAnswers: number = 0;

  ngOnInit() {
    this.resetQuiz();
  }

  protected verify(choice: boolean): void {
    if(choice){
      this.quizState = QuizState.ANSWER_CORRECT;
      this.correctAnswers++;
    }else{
      this.quizState = QuizState.ANSWER_WRONG;
    }
  }

  protected navigateHome(): void {
    this.resetQuiz();
    this.router.navigate(['/home']);
  }

  protected showResults(): void {
    this.quizState = QuizState.RESULT;
  }

  protected nextQuestion(): void {
    if(this.nextQuestionNumber == this.questions.length){
      // Out of questions...
      this.quizState = QuizState.RESULT;
    } else {
      this.quizState = QuizState.QUESTION;
      this.currentQuestion = this.questions[this.nextQuestionNumber];
      this.pseudoRandomiseOrder(this.currentQuestion.answers);
      this.nextQuestionNumber++;
    }
  }

  private pseudoRandomiseOrder<T>(array: T[]): void {
    if (array) {
      array.sort(() => Math.random() - 0.5);
    }
  }

  private resetQuiz(): void {
    this.nextQuestionNumber = 0;
    this.correctAnswers = 0;

    this.questions = this.quizmaster.getQuestions();
    this.pseudoRandomiseOrder(this.questions);
    this.nextQuestion();
  }

  protected readonly QuizState = QuizState;
}

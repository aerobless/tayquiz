import {Answer} from "./answer";

export class Question {
  question: string;
  answers: Answer[];

  constructor(question: string, answers: Answer[]) {
    this.question = question;
    this.answers = answers;
  }
}

import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-emoji-quiz',
  templateUrl: './emoji-quiz.page.html',
  styleUrls: ['./emoji-quiz.page.scss'],
  standalone: true,
  imports: [
    IonicModule
  ]
})
export class EmojiQuizPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    console.log("hello quiz")
  }

  verify(choice: string): void {
    if(choice === '2'){
      alert("correct")
    }else{
      alert("false")
    }
  }

  navigateHome(): void {
    this.router.navigate(['/home']);
  }

}

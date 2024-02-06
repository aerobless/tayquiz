import { Injectable } from '@angular/core';
import {Question} from "./question";
import {Answer} from "./answer";

@Injectable({
  providedIn: 'root'
})
export class QuizmasterService {

  constructor() { }

  getQuestions(): Question[] {
    return [
      new Question("🚂🏠💔🎉🌊", [
        new Answer("Dress", false),
        new Answer("The Last Great American Dynasty", true),
        new Answer("Sparks Fly", false),
        new Answer("Karma", false)
      ]),
      // Mockdata - generated & very likely wrong
      new Question("👸🏼🏰🧚", [
        new Answer("Love Story", true),
        new Answer("White Horse", false),
        new Answer("You Belong With Me", false),
        new Answer("Enchanted", false)
      ]),
      new Question("🎸💔📓🥀", [
        new Answer("All Too Well", true),
        new Answer("Red", false),
        new Answer("Back to December", false),
        new Answer("The Story of Us", false)
      ]),
      new Question("🌌💃🏻✨🌃", [
        new Answer("Starlight", false),
        new Answer("Holy Ground", false),
        new Answer("Out of the Woods", false),
        new Answer("Style", true)
      ]),
      new Question("👧🏼💭🌈🌦", [
        new Answer("Seven", true),
        new Answer("Innocent", false),
        new Answer("Afterglow", false),
        new Answer("Daylight", false)
      ]),
      new Question("🦋💌💙💍", [
        new Answer("Paper Rings", false),
        new Answer("Lover", true),
        new Answer("Cornelia Street", false),
        new Answer("Mine", false)
      ])
    ];
  }
}

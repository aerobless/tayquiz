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
      new Question("📞👗🏈🎤❤️", [
        new Answer("You Belong With Me", true),
        new Answer("All Too Well", false),
        new Answer("Love Story", false),
        new Answer("Wildest Dreams", false)
      ]),
      new Question("💋📰🎲🔥📝", [
        new Answer("Blank Space", true),
        new Answer("Style", false),
        new Answer("Shake It Off", false),
        new Answer("End Game", false)
      ]),
      new Question("🌌🚗💥👗🔄", [
        new Answer("Style", true),
        new Answer("Blank Space", false),
        new Answer("Wildest Dreams", false),
        new Answer("Out of the Woods", false)
      ]),
      new Question("👀🏰🚫💍✅", [
        new Answer("Love Story", true),
        new Answer("You Belong With Me", false),
        new Answer("Speak Now", false),
        new Answer("Enchanted", false)
      ]),
      new Question("🚗🌆👗🌅💭", [
        new Answer("Wildest Dreams", true),
        new Answer("Style", false),
        new Answer("Out of the Woods", false),
        new Answer("All Too Well", false)
      ]),
      new Question("🚪🧣🍁💔📸", [
        new Answer("All Too Well", true),
        new Answer("Style", false),
        new Answer("Begin Again", false),
        new Answer("Red", false)
      ]),
      new Question("🌙🧠💃🎵🚫", [
        new Answer("Shake It Off", true),
        new Answer("Blank Space", false),
        new Answer("22", false),
        new Answer("Bad Blood", false)
      ]),
      new Question("👶🚫💔🔪❄️", [
        new Answer("Bad Blood", true),
        new Answer("Shake It Off", false),
        new Answer("I Knew You Were Trouble", false),
        new Answer("Look What You Made Me Do", false)
      ]),
      new Question("🎭🔑💀📞🔄", [
        new Answer("Look What You Made Me Do", true),
        new Answer("Bad Blood", false),
        new Answer("I Knew You Were Trouble", false),
        new Answer("End Game", false)
      ]),
      new Question("🌃😊💫🚪💭", [
        new Answer("Enchanted", true),
        new Answer("Delicate", false),
        new Answer("Love Story", false),
        new Answer("Wildest Dreams", false)
      ]),
      new Question("👀🛋️📸🌳🔄", [
        new Answer("Out of the Woods", true),
        new Answer("End Game", false),
        new Answer("I Know Places", false),
        new Answer("This Love", false)
      ]),
      new Question("📅👀🚪🌧️💔", [
        new Answer("Forever & Always", true),
        new Answer("All Too Well", false),
        new Answer("The Story of Us", false),
        new Answer("White Horse", false)
      ]),
      new Question("🛵🇬🇧💂🍺❤️", [
        new Answer("London Boy", true),
        new Answer("Delicate", false),
        new Answer("End Game", false),
        new Answer("Paper Rings", false)
      ]),
      new Question("🍃🚪👀💫❤️", [
        new Answer("Crazier", true),
        new Answer("Delicate", false),
        new Answer("Love Story", false),
        new Answer("You Belong With Me", false)
      ]),
      new Question("🌙🎨🌧️♟️🔥", [
        new Answer("Dear John", true),
        new Answer("All Too Well", false),
        new Answer("White Horse", false),
        new Answer("Back to December", false)
      ]),
      new Question("🚗💨🍂💔🔴", [
        new Answer("Red", true),
        new Answer("I Knew You Were Trouble", false),
        new Answer("All Too Well", false),
        new Answer("Style", false)
      ]),
      new Question("🤫💃🍷🛁💛", [
        new Answer("Dress", true),
        new Answer("Delicate", false),
        new Answer("Call It What You Want", false),
        new Answer("Gorgeous", false)
      ]),
      new Question("👣😂🚗🌕💔", [
        new Answer("Ronan", true),
        new Answer("Never Grow Up", false),
        new Answer("Soon You'll Get Better", false),
        new Answer("The Best Day", false)
      ]),
      new Question("🎯🥇📈🔊", [
        new Answer("End Game", true),
        new Answer("Delicate", false),
        new Answer("I Did Something Bad", false),
        new Answer("Don’t Blame Me", false)
      ]),
      new Question("🏰🔪👑💌", [
        new Answer("Call It What You Want", true),
        new Answer("Delicate", false),
        new Answer("King of My Heart", false),
        new Answer("New Year’s Day", false)
      ]),
      new Question("👕📱👠🎶", [
        new Answer("Cardigan", true),
        new Answer("August", false),
        new Answer("The 1", false),
        new Answer("Exile", false)
      ]),
      new Question("🦂🔥🚗😡", [
        new Answer("Mad Woman", true),
        new Answer("The Last Great American Dynasty", false),
        new Answer("Exile", false),
        new Answer("My Tears Ricochet", false)
      ])
    ];
  }
}

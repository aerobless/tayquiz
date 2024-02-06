import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmojiQuizPage } from './emoji-quiz.page';

describe('EmojiQuizPage', () => {
  let component: EmojiQuizPage;
  let fixture: ComponentFixture<EmojiQuizPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EmojiQuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

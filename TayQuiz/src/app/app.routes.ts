import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'emoji-quiz',
    loadComponent: () => import('./emoji-quiz/emoji-quiz.page').then( m => m.EmojiQuizPage)
  },
];

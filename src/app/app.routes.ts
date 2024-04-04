import {Routes, RouterModule, ActivatedRoute} from '@angular/router';

import { NgModule } from '@angular/core';
import {TextComponent} from "./text/text.component";
import {QuizComponent} from "./quiz/quiz.component";
import {PenduComponent} from "./pendu/pendu.component";

const routes: Routes = [
  { path: 'text/:mot', component: TextComponent },
  { path: 'quiz/:question/:answers', component: QuizComponent },
  { path: 'pendu/:hint', component: PenduComponent },
];

@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] })
export class AppRoutes {

  question: string = "";
  answers: string[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.answers=params['answers'].split('|')
      this.question=params['question']
    })
  }
}

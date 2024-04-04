import { Routes , RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import {TextComponent} from "./text/text.component";
import {QuizComponent} from "./quiz/quiz.component";
const routes: Routes = [
  { path: 'text/:mot', component: TextComponent },
  { path: 'quiz/:question/:answers', component: QuizComponent },
];

@NgModule({   imports: [RouterModule.forRoot(routes)],   exports: [RouterModule] })
export class AppRoutes {

}

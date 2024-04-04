import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { TextComponent } from './text/text.component';
import {QuizComponent} from "./quiz/quiz.component";

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

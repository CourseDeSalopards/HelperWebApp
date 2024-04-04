import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-quiz',

  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit {
  question: string = "";
  answers: string[] = [];

  constructor(private route: ActivatedRoute) {


  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {

      this.answers=params['answers'].split('|')
      this.question=params['question']
    })


  }

}

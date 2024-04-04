import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-text',

  templateUrl: './text.component.html',
  styleUrl: './text.component.css'
})
export class TextComponent implements OnInit{
  mot : string = ""
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.mot=params['mot']
    })


  }


}

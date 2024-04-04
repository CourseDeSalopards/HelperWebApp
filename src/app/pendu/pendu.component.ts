import {Component, ElementRef, Renderer2} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pendu',
  templateUrl: './pendu.component.html',
  styleUrl: './pendu.component.css'
})
export class PenduComponent {
  hint: string = "";

  constructor(private route: ActivatedRoute, private renderer: Renderer2, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.hint= this.addSpacesBetweenCharacters(params['hint']);
      this.setFocus();
    })
  }

  addSpacesBetweenCharacters(str: string): string {
    const characters = str.split('');
    return characters.join(' ');
  }

  setFocus(): void {
    const inputElement = this.elementRef.nativeElement.querySelector('input');
    this.renderer.selectRootElement(inputElement).focus();
    inputElement.addEventListener('blur', () => {
      this.setFocus();
    });
  }

  onEnterPressed(event: any): void {
    console.log("Tkt Lyès mon reuf j'te post ta merde là");
  }
}

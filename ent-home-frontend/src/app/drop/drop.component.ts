import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';

@Component({
  selector: 'app-drop',
  standalone: true,
  imports: [BtnComponent],
  templateUrl: './drop.component.html',
  styleUrl: './drop.component.scss'
})
export class DropComponent {
  // @ViewChild('wrap') wrapElem!: ElementRef;
  // wrapElem = viewChild<ElementRef>('wrap');

  constructor() {}

  open(event: MouseEvent) {
    (event.currentTarget! as HTMLElement).classList.add('active');
  }
  close(event: MouseEvent) {
    (event.currentTarget! as HTMLElement).classList.remove('active');
  }
}

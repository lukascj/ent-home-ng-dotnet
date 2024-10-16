import { Component, ElementRef, Input, viewChild, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BtnComponent } from '../btn/btn.component';

@Component({
  selector: 'app-drop',
  standalone: true,
  imports: [BtnComponent, RouterLink],
  templateUrl: './drop.component.html',
  styleUrl: './drop.component.scss'
})
export class DropComponent {
  @Input() label: string = "Dropdown";
  @Input() go: string ="";
  @Input() options: any[] = [];
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

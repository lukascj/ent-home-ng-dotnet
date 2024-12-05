import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.scss'
})
export class BtnComponent {
  @Input() label: string = "Button";
  @Input() go: string = "";
  @Input() slim: boolean = false;
  @Input() func?: Function;
}

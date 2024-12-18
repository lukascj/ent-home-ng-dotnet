import { Component, Input } from '@angular/core';
import { Ent } from 'models/ent';

@Component({
  selector: 'app-ent',
  standalone: true,
  imports: [],
  templateUrl: './ent.component.html',
  styleUrl: './ent.component.scss'
})
export class EntComponent {
  @Input() data!: Ent;

  src: string = `img/posters/${this.data.handle}`;
  alt: string = `${this.data.title} poster`;
}

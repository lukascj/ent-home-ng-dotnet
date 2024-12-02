import { Component, Input } from '@angular/core';
import { Ent } from 'data-structures';

@Component({
  selector: 'app-ent',
  standalone: true,
  imports: [],
  templateUrl: './ent.component.html',
  styleUrl: './ent.component.scss'
})
export class EntComponent {
  @Input() data!: Ent;
}

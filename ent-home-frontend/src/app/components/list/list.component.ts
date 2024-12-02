import { Component, Input } from '@angular/core';
import { EntComponent } from "../ent/ent.component";
import { Ent } from "../../../../../data-structures";

type ListType = "x" | "y" | "grid";
type ListContents = "popular" | "activity";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [EntComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @Input() type: ListType = "x";
  @Input() label: string = "";
  @Input() contentsLabel: ListContents = "popular";

  ents: Ent[] = [];
}

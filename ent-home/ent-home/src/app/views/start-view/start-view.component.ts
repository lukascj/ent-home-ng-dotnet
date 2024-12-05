import { Component } from '@angular/core';
import { ListComponent } from 'components/list/list.component';

@Component({
  selector: 'app-start-view',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './start-view.component.html',
  styleUrl: './start-view.component.scss'
})
export class StartViewComponent {

}

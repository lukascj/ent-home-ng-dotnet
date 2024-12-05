import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from 'components/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'ent-home';

  constructor() {}

  ngOnInit(): void {
    // console.log(window.location.href); 
    // Letade efter en variant direkt från Angular. 
    // Grejade lite med Router och ActivatedRoute, men då fick man här alltid tillbaka en tom sträng.
    // Om man var på /browse så behövde man då kalla ActivatedRoute inuti browse-view.component.ts för att få strängen "browse".
  }
}


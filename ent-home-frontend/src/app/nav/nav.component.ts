import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements AfterViewInit {
  @ViewChild('wrap') wrapElem!: ElementRef;
  public href: string = "";

  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit() {
  }
}  

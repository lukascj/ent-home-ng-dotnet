import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AfterViewInit } from '@angular/core';
import { BtnComponent } from "../btn/btn.component";
import { DropComponent } from '../drop/drop.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, BtnComponent, DropComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements AfterViewInit {
  @ViewChild('wrap') wrapElem!: ElementRef;
  public href: string = "";

  constructor() {}

  ngAfterViewInit() {}
}  

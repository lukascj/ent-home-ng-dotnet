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
    const navOptions = this.wrapElem.nativeElement.querySelectorAll('nav > a');
    const navOptionsData = [];

    console.log(this.route.url);


    /* const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        console.log('Resized width:', entry.contentRect.width);
        console.log('Resized offset-width:', entry.contentRect.offsetWidth);
      }
    }); */
  
    // resizeObserver.observe(this.wrapElem.nativeElement);
    // console.log(this.wrapElem.nativeElement.getBoundingClientRect);
    console.log(window.innerWidth);
    console.log(this.wrapElem.nativeElement.offsetWidth);
    console.log(this.wrapElem.nativeElement.getBoundingClientRect());
  }
}  

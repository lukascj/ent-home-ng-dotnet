import { Component, ElementRef, ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { BtnComponent } from 'components/btn/btn.component';
import { DropComponent } from 'components/drop/drop.component';

interface ICommonOptions {
  label: string,
  go: string,
  auth?: string,
}

interface INavData {
  createDrop: {
    options: ICommonOptions[]
  },
  browseDrop: {
    options: ICommonOptions[]
  },
  profileDrop: {
    options: ICommonOptions[]
  }
}

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [BtnComponent, DropComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements AfterViewInit {
  @ViewChild('wrap') wrapElem!: ElementRef;
  // public href: string = ""; // minns ej vad detta är för...
  elemData: INavData = {
    createDrop: {
      options: [
        {
          label: "Log",
          go: "/create/log"
        },
        {
          label: "Review",
          go: "/create/review"
        },
        {
          label: "Diary-entry",
          go: "/create/diary-entry"
        },
        {
          label: "List",
          go: "/create/list"
        },
        {
          label: "Ent",
          go: "/create/ent",
          auth: "admin"
        }
      ]
    },
    browseDrop: {
      options: [
        {
          label: "Films",
          go: "/films"
        },
        {
          label: "Series",
          go: "/series"
        },
        {
          label: "Games",
          go: "/games"
        },
        {
          label: "Reviews",
          go: "/reviews"
        },
        {
          label: "Users",
          go: "/users"
        },
        {
          label: "Lists",
          go: "/lists"
        },
      ]
    },
    profileDrop: {
      options: [
        {
          label: "Profile",
          go: "/users/you"
        },
        {
          label: "Ratings",
          go: "/users/you/ratings"
        },
        {
          label: "Reviews",
          go: "/users/you/reviews"
        },
        {
          label: "Diary",
          go: "/users/you/diary"
        },
        {
          label: "Lists",
          go: "/users/you/lists"
        }
      ]
    }
  }

  constructor() {}

  ngAfterViewInit() {}
}  

import { Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  opened: boolean = true;
  constructor() {}

  mobileMedia: any = window.matchMedia('(max-width: 500px)');

  ngOnInit(): void {
    if (this.mobileMedia.matches) {
      this.opened = false;
    }
  }

  toggle() {}
}

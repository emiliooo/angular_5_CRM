import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationError, NavigationStart, NavigationEnd, NavigationCancel } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Loading: boolean = false;


  constructor(private router: Router, ) {
    router.events.subscribe((routerEvent: Event) => this.checkEvent(routerEvent));
  }

  checkEvent(routerEvent: Event): void {

    if (routerEvent instanceof NavigationStart) {
      this.Loading = true;
    } else if
    (routerEvent instanceof NavigationEnd ||
    routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError) {
      this.Loading = false;
    }


    console.log(this.Loading);
  }



}

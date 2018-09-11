import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationError, NavigationStart, NavigationEnd, NavigationCancel } from '../../node_modules/@angular/router';
import { LayoutService } from './shared-module/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Loading: boolean = true;

  isSidebarVisible: boolean = false;

  constructor(private layoutService: LayoutService, private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((routerEvent: Event) => this.checkEvent(routerEvent));

    this.layoutService.SideBarSource.subscribe((isVisible) => {
      this.isSidebarVisible = isVisible;
    });
  }

  private checkEvent(routerEvent: Event) {
    if (routerEvent instanceof NavigationStart) {
      this.Loading = true;
    } else if
    (routerEvent instanceof NavigationEnd ||
    routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError) {
      this.Loading = false;
    }
  }

}

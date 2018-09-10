import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  SideBarSource = new Subject<boolean>();

  showSidebar(): void {
    this.SideBarSource.next(true);
  }
  
  hideSidebar(): void {
    this.SideBarSource.next(false);
  }
  
  
}

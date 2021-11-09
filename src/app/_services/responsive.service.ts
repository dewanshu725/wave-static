import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {

  constructor() { }

  screenWidthChanged = new Subject<number>();
  screenSize: string;
  screenWidth: number;

  isMobile: boolean;

  checkWidth() {
    const width = window.innerWidth;
    this.screenWidth = width;
    this.screenWidthChanged.next(this.screenWidth);

    if (width < 576) {
      this.isMobile = true;
      this.screenSize = 'xs';
    }
    else if(width >= 576 && width < 768) {
      this.isMobile = true;
      this.screenSize = 'sm';
    }
    else if (width >= 768 && width < 992) {
      this.isMobile = true;
      this.screenSize = 'md';
    }
    else if (width >= 992 && width < 1200) {
      this.isMobile = false;
      this.screenSize = 'lg';
    }
    else {
      this.isMobile = false;
      this.screenSize = 'xl';
    }
  }
}

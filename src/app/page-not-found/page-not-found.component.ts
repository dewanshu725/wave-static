import { Component, ElementRef, isDevMode, OnInit, ViewChild } from '@angular/core';
import { dev_prod } from '../_helpers/constents';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  @ViewChild('footer', { read: ElementRef, static: true }) footer: ElementRef;

  footerHeight:string;

  wave_long_logo_url:string;
  email_404_url:string;

  ngOnInit(): void {
    this.footerHeight = `${this.footer.nativeElement.clientHeight}px`;

    if (isDevMode()){
      this.wave_long_logo_url = 'assets/svg/long-logo.svg';
      this.email_404_url = 'assets/svg/error_404.svg';
    }
    else{
      this.wave_long_logo_url = dev_prod.staticUrl_prod + 'assets/svg/long-logo.svg';
      this.email_404_url = dev_prod.staticUrl_prod + 'assets/svg/error_404.svg';
    }
  }

}

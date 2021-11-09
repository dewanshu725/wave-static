import { Component, isDevMode, ElementRef, OnInit, ViewChild } from '@angular/core';
import { dev_prod } from '../_helpers/constents';

@Component({
  selector: 'app-account-activated',
  templateUrl: './account-activated.component.html',
  styleUrls: ['./account-activated.component.scss']
})
export class AccountActivatedComponent implements OnInit {

  constructor() { }

  @ViewChild('footer', { read: ElementRef, static: true }) footer: ElementRef;

  footerHeight:string;

  wave_long_logo_url:string;
  account_activated_url:string;

  ngOnInit(): void {
    this.footerHeight = `${this.footer.nativeElement.clientHeight}px`;

    if (isDevMode()){
      this.wave_long_logo_url = 'assets/svg/long-logo.svg';
      this.account_activated_url = 'assets/svg/account_activated.svg';
    }
    else{
      this.wave_long_logo_url = dev_prod.staticUrl_prod + 'assets/svg/long-logo.svg';
      this.account_activated_url = dev_prod.staticUrl_prod + 'assets/svg/account_activated.svg';
    }
  }

}

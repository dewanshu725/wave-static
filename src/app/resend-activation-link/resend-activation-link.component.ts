import { Component, ElementRef, isDevMode, OnInit, ViewChild } from '@angular/core';
import { dev_prod } from '../_helpers/constents';

@Component({
  selector: 'app-resend-activation-link',
  templateUrl: './resend-activation-link.component.html',
  styleUrls: ['./resend-activation-link.component.scss']
})
export class ResendActivationLinkComponent implements OnInit {

  constructor() { }

  @ViewChild('footer', { read: ElementRef, static: true }) footer: ElementRef;

  footerHeight:string;

  wave_long_logo_url:string;
  email_send_url:string;

  ngOnInit(): void {
    this.footerHeight = `${this.footer.nativeElement.clientHeight}px`;

    if (isDevMode()){
      this.wave_long_logo_url = 'assets/svg/long-logo.svg';
      this.email_send_url = 'assets/svg/email_send.svg';
    }
    else{
      this.wave_long_logo_url = dev_prod.staticUrl_prod + 'assets/svg/long-logo.svg';
      this.email_send_url = dev_prod.staticUrl_prod + 'assets/svg/email_send.svg';
    }
  }

}

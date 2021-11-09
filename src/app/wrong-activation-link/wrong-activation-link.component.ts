import { Component, ElementRef, isDevMode, OnInit, ViewChild } from '@angular/core';
import { dev_prod } from '../_helpers/constents';

@Component({
  selector: 'app-wrong-activation-link',
  templateUrl: './wrong-activation-link.component.html',
  styleUrls: ['./wrong-activation-link.component.scss']
})
export class WrongActivationLinkComponent implements OnInit {

  constructor() { }

  @ViewChild('footer', { read: ElementRef, static: true }) footer: ElementRef;

  footerHeight:string;

  wave_long_logo_url:string;

  ngOnInit(): void {
    this.footerHeight = `${this.footer.nativeElement.clientHeight}px`;

    if (isDevMode()){
      this.wave_long_logo_url = 'assets/svg/long-logo.svg';
    }
    else{
      this.wave_long_logo_url = dev_prod.staticUrl_prod + 'assets/svg/long-logo.svg';
    }
  }

}

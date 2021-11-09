import { Component, isDevMode, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { dev_prod } from 'src/app/_helpers/constents';
import { ResponsiveService } from 'src/app/_services/responsive.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  constructor(private responsiveService: ResponsiveService) { }

  wave_long_logo_url:string;

  screenWidth:number;
  screenWidthChanged$:Subscription;

  extenedOptionPanOpened = false;

  ngOnInit(): void {
    this.screenWidth = this.responsiveService.screenWidth;

    this.screenWidthChanged$ = this.responsiveService.screenWidthChanged.subscribe(value => this.screenWidth = value);

    if (isDevMode()){
      this.wave_long_logo_url = 'assets/svg/long-logo.svg';
    }
    else{
      this.wave_long_logo_url = dev_prod.staticUrl_prod + 'assets/svg/long-logo.svg';
    }
  }

  ngOnDestroy(){
    this.screenWidthChanged$.unsubscribe();
  }

}

import { Component, OnInit, isDevMode, ElementRef, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { dev_prod } from '../_helpers/constents';
import { ResponsiveService } from '../_services/responsive.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(private responsiveService: ResponsiveService) { }

  @ViewChild('footer', { read: ElementRef, static: true }) footer: ElementRef;
  @ViewChild('video') video: ElementRef;

  footerHeight:string;

  hero_video_url:string;
  hero_art_url:string;
  girl_on_computer_url:string;
  girl_diving_url:string;
  girl_machine_url:string;
  girl_painter_url:string;
  girl_scientist_url:string;
  girl_on_call_url:string;
  girl_painting_together_url:string;

  screenWidth:number;
  screenWidthChanged$:Subscription;

  ngOnInit(): void {
    this.footerHeight = `${this.footer.nativeElement.clientHeight}px`;

    this.screenWidth = this.responsiveService.screenWidth;

    this.screenWidthChanged$ = this.responsiveService.screenWidthChanged.subscribe(value => this.screenWidth = value);

    this.createAssetUrl();
  }

  ngAfterViewInit(){
    this.video.nativeElement.load();
    this.video.nativeElement.muted = true;
    this.video.nativeElement.loop = true;
    this.video.nativeElement.autoplay = true;
    this.video.nativeElement.play();
  }

  createAssetUrl(){
    if (isDevMode()){
      this.hero_video_url = 'assets/video/hero_video.mp4';
      this.hero_art_url = 'assets/img/hero_art.jpg';
      this.girl_on_computer_url = 'assets/svg/girl_on_computer.svg';
      this.girl_diving_url = 'assets/img/girl_diving.png';
      this.girl_machine_url = 'assets/img/girl_machine.png';
      this.girl_painter_url = 'assets/img/girl_painter.png';
      this.girl_scientist_url = 'assets/img/girl_scientist.png';
      this.girl_on_call_url = 'assets/svg/girl_on_call.svg';
      this.girl_painting_together_url = 'assets/svg/girls_painting_together.svg';
    }
    else{
      this.hero_video_url = dev_prod.staticUrl_prod + 'assets/video/hero_video.mp4';
      this.hero_art_url = dev_prod.staticUrl_prod + 'assets/img/hero_art.jpg';
      this.girl_on_computer_url = dev_prod.staticUrl_prod + 'assets/svg/girl_on_computer.svg';
      this.girl_diving_url = dev_prod.staticUrl_prod + 'assets/img/girl_diving.png';
      this.girl_machine_url = dev_prod.staticUrl_prod + 'assets/img/girl_machine.png';
      this.girl_painter_url = dev_prod.staticUrl_prod + 'assets/img/girl_painter.png';
      this.girl_scientist_url = dev_prod.staticUrl_prod + 'assets/img/girl_scientist.png';
      this.girl_on_call_url = dev_prod.staticUrl_prod + 'assets/svg/girl_on_call.svg';
      this.girl_painting_together_url = dev_prod.staticUrl_prod + 'assets/svg/girls_painting_together.svg';
    }
  }

  ngOnDestroy(){
    this.screenWidthChanged$.unsubscribe();
  }

}

import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from './_services/responsive.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private responsiveService: ResponsiveService){}

  title = 'wave-static';

  ngOnInit(){
    this.onResize();
  }

  onResize(){
    this.responsiveService.checkWidth();
  }
}

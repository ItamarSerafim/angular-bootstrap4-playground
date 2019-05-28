import { Component, Input, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class CarouselComponent implements OnInit {
  @Input() slides: string[];
  constructor(config: NgbCarouselConfig) { 
  // this.slides = [1, 2, ].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  // this.slides.push('//i.imgur.com/NmT1WkY.png');
  // this.slides.push('//i.imgur.com/1XDewle.png');
  
                   
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = true;
    config.pauseOnHover = false;
  }

  ngOnInit() {
  }

}
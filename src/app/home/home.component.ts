import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  customOptions: any = {
    loop: true,
    margin: 10,
    nav: true,
    navText: [
      "<img class='left' src='../../assets/left-arrow.png' alt='' />",
      "<img class='next' src='../../assets/next.png' alt='' />"
    ],
    autoplay: false,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1
      },
      800: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  };

  constructor(private titleService: Title) {
    this.titleService.setTitle('Cake');
  }

  ngOnInit(): void {
  }

}

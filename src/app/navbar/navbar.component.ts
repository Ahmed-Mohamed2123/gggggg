import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  occasions() {
    const occasions = document.getElementById('occasions').offsetTop
    window.scroll({top: occasions, behavior:"smooth"});
  }

  offers() {
    const offer = document.getElementById('offer').offsetTop
    window.scroll({top: offer, behavior:"smooth"});
  }

  menu() {
    const menu = document.getElementById('menu').offsetTop
    window.scroll({top: menu, behavior:"smooth"});
  }

  testimonials() {
    const testimonials = document.getElementById('testimonials').offsetTop
    window.scroll({top: testimonials, behavior:"smooth"});
  }


  contact() {
    const contact = document.getElementById('contact').offsetTop
    window.scroll({top: contact, behavior:"smooth"});
  }

}

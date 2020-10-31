import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyB2M3BWpkx7cPeyJDymnug48Rll2YQfuV8',
      authDomain: 'pastry-7fb7d.firebaseapp.com',
      databaseURL: 'https://pastry-7fb7d.firebaseio.com',
      projectId: 'pastry-7fb7d',
      storageBucket: 'pastry-7fb7d.appspot.com',
      messagingSenderId: '479446632477',
      appId: '1:479446632477:web:9c3425daccbadb9d001ef4',
      measurementId: 'G-2ELS29GJZT'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

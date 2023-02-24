import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { Card1Component } from './components/card1/card1.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { Card1GalleryComponent } from './components/card1-gallery/card1-gallery.component';
import { Card2ContainerComponent } from './components/card2-container/card2-container.component';
import { Card2Component } from './components/card2/card2.component';

@NgModule({
  declarations: [
    AppComponent,
    Card1Component,
    Card1GalleryComponent,
    GalleryComponent,
    HomeComponent,
    Card2ContainerComponent,
    Card2Component
  ],
  imports: [
    BrowserModule,
    
    SharedModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

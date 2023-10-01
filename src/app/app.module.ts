import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtService } from './service/art.service';
import { GetArtComponent } from './get-art/get-art.component';

@NgModule({
  declarations: [
    AppComponent,
    GetArtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ArtService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtService } from './service/art.service';
import { GetArtComponent } from './get-art/get-art.component';
import { ArtDisplayComponent } from './art-display/art-display.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MessageDisplayComponent } from './message-display/message-display.component';

@NgModule({
  declarations: [
    AppComponent,
    GetArtComponent,
    ArtDisplayComponent,
    SearchInputComponent,
    MessageDisplayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [ArtService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { ArtService } from './service/art.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 })),
      ])
    ])
  ]
})
export class AppComponent {
  title = 'DailyArtApp';

  displayArt: boolean = false;
  displaySearch: boolean = true;
  displayMessage: boolean = false;

  constructor(private artService: ArtService){}


  onArtFetched() {
    if(Object.keys(this.artService.art).length === 0) {
      this.displayMessage = false;
      setTimeout(() => {
        this.displayMessage = true;
      }, 500);
    } else {
      this.displaySearch = false
      this.displayMessage = false;
    };

    this.displayArt = false;
    setTimeout(() => {
      this.displayArt = true;
    }, 500);
  }
}

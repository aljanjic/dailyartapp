import { Component } from '@angular/core';
import { ArtService } from './service/art.service';
import { Observable, Subscription } from 'rxjs';
import { Art } from './interface/art';
import { Data } from './interface/data';
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
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 })),
      ])
    ])
  ]
})
export class AppComponent {
  title = 'dailyartapp';

  subscription: Subscription;



  displayArt: boolean = false;

  onArtFetched() {
    this.displayArt = false;
    setTimeout(() => {
      this.displayArt = true;
    }, 500);
  }


  constructor(private artService: ArtService){}


  ngOnInit(){

    // this.subscription = this.artService.artChanged.subscribe({
    //   next: response => this.displayArt = true
    // })

  }


  ngOnDestory(){
    this.subscription.unsubscribe();
  }


}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ArtService } from '../service/art.service';
import { Data } from '../interface/data';

@Component({
  selector: 'app-art-display',
  templateUrl: './art-display.component.html',
  styleUrls: ['./art-display.component.css']
})
export class ArtDisplayComponent implements OnInit, OnDestroy{
  
  subscription: Subscription
  
  art: Data;
  selectedArt: Data;
  image: string;
  randomArt: number = Math.floor((Math.random() * 4) )

  constructor(private artService: ArtService){}

  ngOnInit(){
    this.subscription = this.artService.artChanged.subscribe({
      next: response => {
      this.art = response;
      console.log('Data in the art-display: ', this.art);
      console.log('Random number: ', this.randomArt)
      this.selectedArt = this.art[this.randomArt];
      console.log('Selected Art: ', this.selectedArt);
      this.image = `https://www.artic.edu/iiif/2/${this.selectedArt['image_id']}/full/350,/0/default.jpg`
      console.log('Image source: ', this.image)

      }
    }
    )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}

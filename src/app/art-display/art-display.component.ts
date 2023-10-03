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

  art: Data;
  subscription: Subscription

  selectedArt: Data;

  image;
  constructor(private artService: ArtService){}

  ngOnInit(){
    this.subscription = this.artService.artChanged.subscribe({
      next: response => {
      this.art = response;
      console.log('Data in the art-display: ', this.art);
      this.selectedArt = this.art[4];
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

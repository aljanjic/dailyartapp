import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
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
  randomArt: number;

  constructor(private artService: ArtService, private sanitizer: DomSanitizer){}

  
  ngOnInit() {
    // this.subscription = this.artService.artChanged.subscribe({
    //   next: response => {
    //     this.art = response;
    //     console.log('Data length for random number: ', Object.keys(this.art).length)
    //     this.randomArt = Math.floor((Math.random() * Object.keys(this.art).length))
    //     console.log('Data in the art-display: ', this.art);
    //     console.log('Random number: ', this.randomArt)
    //     this.selectedArt = this.art[this.randomArt];
    //     console.log('Selected Art: ', this.selectedArt);
    //     this.image = `https://www.artic.edu/iiif/2/${this.selectedArt['image_id']}/full/350,/0/default.jpg`
    //     console.log('Image source: ', this.image)

    //   }
    // })


    // You will clean this up, either in a function or by reorganising the code and data flow after creating transition when displaying
    this.subscription = this.artService.artChanged.subscribe({
      next: () => {
        this.art = this.artService.getArt()
        console.log('Data length for random number: ', Object.keys(this.art).length)
        this.randomArt = Math.floor((Math.random() * Object.keys(this.art).length))
        console.log('Data in the art-display: ', this.art);
        console.log('Random number: ', this.randomArt)
        this.selectedArt = this.art[this.randomArt];
        console.log('Selected Art: ', this.selectedArt);
        this.image = `https://www.artic.edu/iiif/2/${this.selectedArt['image_id']}/full/350,/0/default.jpg`
        console.log('Image source: ', this.image)
      }
    })
    this.art = this.artService.getArt()
    console.log('Data length for random number: ', Object.keys(this.art).length)
    this.randomArt = Math.floor((Math.random() * Object.keys(this.art).length))
    console.log('Data in the art-display: ', this.art);
    console.log('Random number: ', this.randomArt)
    this.selectedArt = this.art[this.randomArt];
    console.log('Selected Art: ', this.selectedArt);
    this.image = `https://www.artic.edu/iiif/2/${this.selectedArt['image_id']}/full/350,/0/default.jpg`
    console.log('Image source: ', this.image)
  }

  
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  
  getSafeDescription(): SafeHtml {
    const cleanedHtml = this.removeHrefsFromHtml(this.selectedArt['description']);
    return this.sanitizer.bypassSecurityTrustHtml(cleanedHtml);  }
  
  private removeHrefsFromHtml(htmlString: string): string {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
  
    const links = doc.querySelectorAll('a[href]');
    links.forEach(link => {
        link.removeAttribute('href');
    });
  
    return doc.body.innerHTML;
  }



}

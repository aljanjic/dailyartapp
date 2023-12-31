import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { ArtService } from '../service/art.service';
import { Data } from '../interface/data';
import { HttpService } from '../service/http.service';

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
  chosenArt: number;
  imageLoaded = false;

  constructor(private artService: ArtService, private sanitizer: DomSanitizer, private httpService: HttpService){}

  ngOnInit() {
    this.displayingArt();
    // Needed for random art
    this.subscription = this.artService.artChanged.subscribe({
      next: () => {
        this.displayingArt();
      }
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


  onImageLoad() {
    this.imageLoaded = true;
  }

  displayingArt(){
    // Theoretical we can outsource logic for randomArt and selectedArt to artService
    if(this.httpService.searchTerm.length === 0) {
      this.art = this.artService.getArt()
      this.randomArt = Math.floor((Math.random() * Object.keys(this.art).length))
      this.selectedArt = this.art[this.randomArt];
      if(this.selectedArt) this.image = `https://www.artic.edu/iiif/2/${this.selectedArt['image_id']}/full/350,/0/default.jpg`
    } else {
      this.art = this.artService.getArt()
      this.chosenArt = this.artService.setChosenArt()
      this.selectedArt = this.art[this.chosenArt];
      if(this.selectedArt) this.image = `https://www.artic.edu/iiif/2/${this.selectedArt['image_id']}/full/350,/0/default.jpg`
    }
  }

  getSafeDescription(): SafeHtml {
    const cleanedHtml = this.removeHrefsFromHtml(this.selectedArt['description']);
    if (cleanedHtml === 'null') return this.sanitizer.bypassSecurityTrustHtml('');
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

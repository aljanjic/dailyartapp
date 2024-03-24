import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Data } from '../interface/data';
@Injectable({
  providedIn: 'root'
})
export class ArtService {

  artChanged = new Subject<Data>();
  art: Data;
  chosenArt: number;

  setArt(art:Data){
    const mutatedArt = art['data'].filter((value:Data) => value['image_id'] !== null && value['_score'] > 60)
    this.art = mutatedArt;
    this.artChanged.next({...this.art})
  }

  setFilteredArt(art:Data){
    const mutatedArt = art['data'].filter((value:Data) => value['description'] !== null && value['image_id'] !== null)
    this.art = mutatedArt;
    this.artChanged.next({...this.art})
  }

  getArt(){
    return {...this.art}
  }

  setChosenArt(){
    if(this.chosenArt === undefined || this.chosenArt === Object.keys(this.art).length || Object.keys(this.art).length === 0 ) this.chosenArt = 0;
    return this.chosenArt++;
  }
}

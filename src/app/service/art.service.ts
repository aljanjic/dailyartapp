import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Data } from '../interface/data';
@Injectable({
  providedIn: 'root'
})
export class ArtService {


  artChanged = new Subject<Data>();
  private art: Data;


  setArt(art:Data){
    const mutatedArt = art['data'].filter((value:Data) => value['description'] !== null && value['image_id'] !== null)
    this.art = mutatedArt;
    this.artChanged.next({...this.art})
  }

  getArt(){
    return {...this.art}
  }


}

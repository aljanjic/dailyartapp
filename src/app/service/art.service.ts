import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Data } from '@angular/router';
import { Art } from '../interface/art';

@Injectable({
  providedIn: 'root'
})
export class ArtService {


  artChanged = new Subject<Data>();
  private art: Data;

  private apiUrl = `https://api.artic.edu/api/v1/artworks?fields=id,title,image_id,description`

  constructor(private http: HttpClient) { }




  setArt(art:Data){
    this.art = art;
    this.artChanged.next({...this.art})

    console.log('Assigned value: ', this.art); 

  }


}

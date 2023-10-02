import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from '@angular/router';
import { Art } from '../interface/art';

@Injectable({
  providedIn: 'root'
})
export class ArtService {

  art: Art;

  private apiUrl = `https://api.artic.edu/api/v1/artworks?fields=id,title,image_id,description`

  constructor(private http: HttpClient) { }



  getArt():Observable<Data>{
    return this.http.get<Data>(this.apiUrl)
  }

}

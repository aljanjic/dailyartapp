import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators'
import { Art } from '../interface/art';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ArtService {

  private apiUrl = `https://api.artic.edu/api/v1/artworks?fields=id,title,image_id,description`

  constructor(private http: HttpClient) { }



  getArt():Observable<Data>{
    return this.http.get<Data>(this.apiUrl)
  }

  // getArtItem():Observable<Art>{
  //   return this.http.get<Art>(`${this.apiUrl}/6010`)
  // }
}

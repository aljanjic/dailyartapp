import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '../interface/data';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ArtService } from './art.service';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // https://api.artic.edu/api/v1/artworks/search?q=&fields=id,title,image_id,description
  // https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display
  // Salvador Dali: https://api.artic.edu/api/v1/artworks/search?q=salvador&page=1&limit=100&fields=id,artist_title,title,image_id,description
  
  
  //private apiUrl = `https://api.artic.edu/api/v1/artworks/search?q=salvador&page=1&limit=100&fields=id,artist_title,title,image_id,description`

  private apiUrl : string;
  randomPage: number;
  randomLimit: number;

  constructor(private http: HttpClient, private artService: ArtService) { }

  fetchArt():Observable<Data>{

    this.randomPage = Math.floor((Math.random() * 10) )

    this.apiUrl = `https://api.artic.edu/api/v1/artworks/search?q=&page=${this.randomPage}&limit=100&fields=id,artist_title,title,image_id,description`

    return this.http.get<Data>(this.apiUrl).pipe(
      tap(art => {
        return this.artService.setArt(art)
      })
    )
  }

}
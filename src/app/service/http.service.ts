import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '../interface/data';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ArtService } from './art.service';
import { environment } from 'src/enviroments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiUrl: string = environment.apiUrl;
  randomPage: number;
  searchTerm: string;

  constructor(private http: HttpClient, private artService: ArtService) { }


  fetchArt(): Observable<Data> {
    this.randomPage = Math.floor((Math.random() * 10))
    // For multiple APIs different functions below can be called that would process random or searchTerm
    let fetchAPI: string;
    this.searchTerm.length === 0 ? 
      fetchAPI = `${this.apiUrl}/search?q=&page=${this.randomPage}&limit=100&fields=id,artist_title,title,image_id,description` :
      fetchAPI = `${this.apiUrl}/search?q=${this.searchTerm}&page=1&limit=100&fields=id,artist_title,title,image_id,description`;     



      return this.http.get<Data>(fetchAPI).pipe(
        tap(art => {
          return this.searchTerm.length === 0 ? this.artService.setFilteredArt(art) : this.artService.setArt(art);
        })
      ) 
  }

}
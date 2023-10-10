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
  randomLimit: number;
  searchTerm: string;

  constructor(private http: HttpClient, private artService: ArtService) { }


  fetchArt(): Observable<Data> {
    this.randomPage = Math.floor((Math.random() * 10))
    this.searchTerm.length === 0 ? this.apiUrl = `${this.apiUrl}/search?q=&page=${this.randomPage}&limit=100&fields=id,artist_title,title,image_id,description` : this.apiUrl = `${this.apiUrl}/search?q=${this.searchTerm}&page=1&limit=100&fields=id,artist_title,title,image_id,description`
    return this.http.get<Data>(this.apiUrl).pipe(
      tap(art => {
        console.log(this.apiUrl)
        return this.artService.setArt(art)
      })
    )
  }


}
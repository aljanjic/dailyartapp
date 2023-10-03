import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ArtService } from './art.service';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiUrl = `https://api.artic.edu/api/v1/artworks?fields=id,title,image_id,description`

  constructor(private http: HttpClient, private artService: ArtService) { }

  fetchArt():Observable<Data>{
    return this.http.get<Data>(this.apiUrl).pipe(
      tap(art => {
        console.log('Response: ', art)
        const mutatedArt = art['data'].filter((value:Data) => value['description'] !== null && value['image_id'] !== null)
        return this.artService.setArt(mutatedArt)
      })
    )
  }

}
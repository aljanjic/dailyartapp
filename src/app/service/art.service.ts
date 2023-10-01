import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Art } from '../interface/art';

@Injectable({
  providedIn: 'root'
})
export class ArtService {

  private apiUrl = `https://api.artic.edu/api/v1/artworks`

  constructor(private http: HttpClient) { }



  getArt():Observable<Art>{
    return this.http.get<Art>(this.apiUrl)
  }

  getArtItem():Observable<Art>{
    return this.http.get<Art>(`${this.apiUrl}/6010`)
  }
}

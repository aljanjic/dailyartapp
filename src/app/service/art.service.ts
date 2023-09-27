import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtService {

  private apiUrl = `https://api.artic.edu/api/v1/artworks`

  constructor(private http: HttpClient) { }



  getArts():Observable<Object>{
    return this.http.get<Object>(this.apiUrl)
  }

  getArt():Observable<Object>{
    return this.http.get<Object>(`${this.apiUrl}/6010`)
  }
}

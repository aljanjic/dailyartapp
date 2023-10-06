import { Component, EventEmitter, Output } from '@angular/core';
import { Art } from '../interface/art';
import { ArtService } from '../service/art.service';
import { Data } from '@angular/router';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-get-art',
  templateUrl: './get-art.component.html',
  styleUrls: ['./get-art.component.css']
})
export class GetArtComponent {

  @Output() artFetched = new EventEmitter<void>();

constructor( private httpService: HttpService){}

  onGetArt():void{
    // next, error and complete are not needed but they would be used here
    this.httpService.fetchArt().subscribe({
      next: respnse => this.artFetched.emit()
    })
  }

}

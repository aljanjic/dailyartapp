import { Component, EventEmitter, Output } from '@angular/core';
import { HttpService } from '../service/http.service';
import { ArtService } from '../service/art.service';

@Component({
  selector: 'app-get-art',
  templateUrl: './get-art.component.html',
  styleUrls: ['./get-art.component.css']
})
export class GetArtComponent {

  @Output() artFetched = new EventEmitter<number>();

constructor( private httpService: HttpService, private artService: ArtService){}

  onGetArt():void{
    // First time clicking on Get the art button
    if (!this.artService.art || Object.keys(this.artService.art).length === 0 ){
      // next, error and complete are not needed but they would be used here
      this.httpService.fetchArt().subscribe({
        next: response => {
          this.artFetched.emit()
        }
      })
    } else {
      // Data was already loaded, only display already loaded data
      this.artFetched.emit()
    }

  }

}




// if(this.artService.art === 'undefined') {

//   this.httpService.fetchArt().subscribe({
//     next: respnse => this.artFetched.emit()
//   })

// } 
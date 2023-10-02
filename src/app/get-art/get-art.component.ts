import { Component } from '@angular/core';
import { Art } from '../interface/art';
import { ArtService } from '../service/art.service';
import { Data } from '@angular/router';
import { DataStorageService } from '../service/data-storage.service';

@Component({
  selector: 'app-get-art',
  templateUrl: './get-art.component.html',
  styleUrls: ['./get-art.component.css']
})
export class GetArtComponent {

constructor( private dataStorageService: DataStorageService){}

  onGetArt():void{
    this.dataStorageService.fetchArt().subscribe()
  }

}



// next: (response) => {
//   this.art = response['data'].filter((value:Data) => value['description'] !== null && value['image_id'] !== null);
//   console.log('Response: ',response)
//   console.log('Assigned value: ', this.art); 
// },
// error: (error) =>  console.log(error),
// complete: ()=> console.log('Done geting Arts')
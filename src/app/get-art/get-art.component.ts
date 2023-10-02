import { Component } from '@angular/core';
import { Art } from '../interface/art';
import { ArtService } from '../service/art.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-get-art',
  templateUrl: './get-art.component.html',
  styleUrls: ['./get-art.component.css']
})
export class GetArtComponent {

constructor(private artService: ArtService){}

  onGetArt():void{
    this.artService.getArt().subscribe({
      next: (response) => {
        this.artService.art = response['data'].filter((value:Data) => value['description'] !== null && value['image_id'] !== null);
        console.log('Response: ',response)
        console.log('Assigned value: ', this.artService.art); 
      },
      error: (error) =>  console.log(error),
      complete: ()=> console.log('Done geting Arts')
    })
  }

}

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


  onGetArt(){
    console.log('Button clicked')
  }

}

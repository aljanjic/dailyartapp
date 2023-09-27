import { Component } from '@angular/core';
import { ArtService } from './service/art.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dailyartapp';

  art: Object = {};


  constructor(private artService: ArtService){}

  onGetArts():void{
    this.art = this.artService.getArts()
    console.log(this.art)
    
  }

  onGetArt():void{
    this.art = this.artService.getArt()
    console.log(this.art)
    
  }
}

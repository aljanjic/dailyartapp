import { Component } from '@angular/core';
import { ArtService } from './service/art.service';
import { Observable } from 'rxjs';
import { Art } from './interface/art';
import { Data } from './interface/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dailyartapp';

  art: Art;

  constructor(private artService: ArtService){}


  onGetArt():void{
    this.artService.getArt().subscribe({
      next: (response) => {
        this.art = response['data'].filter((value:Data) => value['description'] !== null && value['image_id'] !== null);
        console.log('Response: ',response)
        console.log('Assigned value: ', this.art); 
      },
      error: (error) =>  console.log(error),
      complete: ()=> console.log('Done geting Arts')
    })
  }
}

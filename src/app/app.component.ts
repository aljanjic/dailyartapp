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

  art;


  constructor(private artService: ArtService){}

  onGetArt():void{
    this.artService.getArts().subscribe({
      next: (response) => {
        this.art = response;
        console.log(response)
        // console.log(this.art.data); 
      },
      error: (error) =>  console.log(error),
      complete: ()=> console.log('Done geting Arts')
      
    })
    
  }

  onGetArtItem():void{
    this.artService.getArt().subscribe({
      next: (response) => {
        this.art = response;
        console.log(response)
        // console.log(this.art.data);
      },
      error: (error) =>  console.log(error),
      complete: ()=> console.log('Done geting Art')
      
    })
    
  }
}

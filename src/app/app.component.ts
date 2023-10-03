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

  displayArt = false;


  constructor(private artService: ArtService){}



}

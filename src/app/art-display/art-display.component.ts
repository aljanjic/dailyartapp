import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ArtService } from '../service/art.service';
import { Data } from '../interface/data';

@Component({
  selector: 'app-art-display',
  templateUrl: './art-display.component.html',
  styleUrls: ['./art-display.component.css']
})
export class ArtDisplayComponent implements OnInit, OnDestroy{

  art: Data;
  subscription: Subscription

  constructor(private artService: ArtService){}

  ngOnInit(){
    this.subscription = this.artService.artChanged.subscribe({
      next: response => this.art = response
    }
    )
  }

  ngOnDestroy(){

  }

}

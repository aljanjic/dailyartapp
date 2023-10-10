import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent {


  constructor(private httpService: HttpService){}

  searchTerm = '';


  ngDoCheck(){
    this.httpService.searchTerm = this.searchTerm.split(' ').join('');
  }

}

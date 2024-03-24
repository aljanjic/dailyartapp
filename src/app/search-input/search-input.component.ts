import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent {

  @Output() enterPressed = new EventEmitter<any>();
  @ViewChild('inputRef') inputRef: ElementRef;

  searchTerm = '';

  constructor(private httpService: HttpService){}

  ngAfterViewInit(): void {
    this.inputRef.nativeElement.focus();
  }

  onEnter(){
    this.httpService.fetchArt().subscribe({
      next: response => {
        this.enterPressed.emit();
      }
    })
  }

  ngDoCheck(){
    this.httpService.searchTerm = this.searchTerm.split(' ').join('');
  }
}

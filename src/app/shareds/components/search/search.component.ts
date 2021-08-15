import { Component, OnInit,Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public text : string = '';

  @Output() sendFilter: EventEmitter<string> = new EventEmitter();
  constructor() { 
    
  }

  ngOnInit(): void {
  }

  public onSearchChange(event: any) {
    this.sendFilter.emit(event.value);
  }
}

 
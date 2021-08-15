import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Item } from 'src/app/models/const/item';

@Component({
  selector: 'app-list-select',
  templateUrl: './list-select.component.html',
  styleUrls: ['./list-select.component.scss']
})
export class ListSelectComponent implements OnInit {
  @Input() listSelect: Array <Item> = [];

  @Output() selectedItem: EventEmitter<Item> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
 
  }

  public selected(selected: Item) {
    this.selectedItem.emit(selected);
  }
}

import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Detail } from 'src/app/models/const/detail';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() list: Array<Detail> = [];

  @Output() deleteDetail: EventEmitter<Detail> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onDelete(detailToDelete: Detail) {
    this.deleteDetail.emit(detailToDelete);
  }
}

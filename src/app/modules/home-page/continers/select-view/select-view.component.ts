import { Component, OnInit,Output ,EventEmitter } from '@angular/core';
import { DataService } from 'src/app/cores/services/data.service';
import { DataDetailService } from 'src/app/cores/services/data-detail.service';
import { Item } from 'src/app/models/const/item';
import { Detail } from 'src/app/models/const/detail';


@Component({
  selector: 'app-select-view',
  templateUrl: './select-view.component.html',
  styleUrls: ['./select-view.component.scss']
})
export class SelectViewComponent implements OnInit {
 public listSelect: Array<Item> = [];  
 public detail:  Detail = {Ask : 0 ,AskSize: 0,BasePrice: 0,Bid: 0,BidSize: 0,LastPrice: 0,Name: '',Symbol: '',UpdateId: 0};
 @Output() sendDetailToList: EventEmitter<Detail> = new EventEmitter();

  constructor( private dataService: DataService, private dataDetailService: DataDetailService) { }

  ngOnInit(): void {
  }

  public onChangeFilter(event: any): void {
    //console.log(event)
    this.getValue(event);
    
  }


  getValue(select: string) {
    this.dataService.getData(select).subscribe((list: Array<Item>) =>{
      this.listSelect  = list;
    });
  }

  public onSelecetItem(value: Item) {
    this.dataDetailService.getData(value).subscribe((detail: Array<Detail>) =>{
      this.detail  = detail[0];
      this.sendDetailToList.emit(this.detail);

    });
   
  }


}

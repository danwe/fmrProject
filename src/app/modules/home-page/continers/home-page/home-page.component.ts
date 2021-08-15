import { Component, OnInit } from '@angular/core';
import { Detail } from 'src/app/models/const/detail';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public list: Array<Detail> = []; 
  constructor() { }

  ngOnInit(): void {
  }
  public onSendDetailToList(selectViewToList: Detail) {
    this.checkNoExist(selectViewToList);
   
  } 

  public onDeleteDetail(detailToDelete: Detail) {
    let tempDetail : Array<Detail> = this.list.slice(); 
    this.list = [];
    tempDetail.forEach(selector => {
      console.log(selector)
      if (selector.Name != detailToDelete.Name) {
        this.list.push(selector);
      } 
    });
  } 


  public checkNoExist(select: Detail) {
    let exist = true;
    this.list.forEach(selector => {
      if (selector.Name == select.Name) {
        exist = false;
        alert('this detail exist');
       
      } 
    });
    setTimeout(()=>{ 
      if (exist)   {
        this.list.push(select);
      }    
  }, 500);
    
    
  }
}

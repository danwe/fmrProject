import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Item } from 'src/app/models/const/item';

@Injectable({
  providedIn: 'root'
})
export class DataDetailService {

  constructor(private httpClient: HttpClient) { }


  public getData(select: Item): Observable<any> {
    let apiURL = 'https://mobiledev.ordernet.co.il/api/stocks?symbols='+ select.Symbol;
    return this.httpClient.get(apiURL);
  }
}

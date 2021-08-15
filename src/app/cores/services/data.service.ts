import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }


  public getData(select:string): Observable<any> {
    let apiURL = 'https://mobiledev.ordernet.co.il/api/stocks?query='+ select;
    return this.httpClient.get(apiURL);
  }

}

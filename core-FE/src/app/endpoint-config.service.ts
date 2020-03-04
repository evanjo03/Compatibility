import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EndpointConfigService {

  private globalEndpoint = 'http://localhost:4200';
  private tempEndpoint = 'http://www.mocky.io/v2/5e5f066b310000b838afd8f7';

  constructor(private http: HttpClient) { }

  public getNewGameId(): Observable<any> {
    return this.http.get(this.tempEndpoint);
  }

}

import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Site } from '../models/site';

@Injectable({
  providedIn: 'root'
})
export class SiteService {
  private baseURL ="http://localhost:8080/api/v1/sites";
  constructor(private httpClient: HttpClient) { }
    getSiteList(): Observable<Site[]>{
      return this.httpClient.get<Site[]>(`${this.baseURL}`);
    }

  
}

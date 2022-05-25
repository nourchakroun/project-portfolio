import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Features } from '../models/features';

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {
  private baseURL = "http://localhost:8080/api/v1/features"
  

  constructor(private httpClient: HttpClient) { }
  getFeatureList():Observable<Features[]>{
    return this.httpClient.get<Features[]>(`${this.baseURL}`);
  }
  
}

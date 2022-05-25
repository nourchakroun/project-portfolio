import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { User } from '../../user';

@Injectable({
providedIn : 'root'
})
export class UserService {
  private baseUrl = "http://localhost:8080/api/v1/users";

  constructor(private httpClient: HttpClient) {
  }
  getUsersList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseUrl}`);
  }
}
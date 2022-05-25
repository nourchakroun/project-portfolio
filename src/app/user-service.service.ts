import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { User } from './User';

@Injectable({
providedIn : 'root'
})
export class UserService {
  private baseUrl = "http://localhost:8080/api/v1/Users";

  constructor(private httpClient: HttpClient) {
  }
  getUsersList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseUrl}`);
  }
  createUser(user:User): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, user);
  }

  getUserById(id: number): Observable<User>{
    return this.httpClient.get<User>(`${this.baseUrl}/${id}`);
  }

  updateUser(id: number,user: User): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, user);
  }

  deleteUser(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
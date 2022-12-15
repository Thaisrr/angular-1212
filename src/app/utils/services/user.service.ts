import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {User} from "../models/User";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  api_url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.api_url);
  }

  getOneById(id: number): Observable<User> {
    return this.http.get<User>(`${this.api_url}/${id}`);
  }

  getOneByEmail(email: string): Observable<User> {
    //const params = new HttpParams();
    //params.append('email', email);
    return this.http.get<User>(this.api_url, {
      params: {email},
    })
  }

  create(new_user: User) {
    return this.http.post<User>(this.api_url, new_user);
  }

  remove(id: number) {
    return this.http.delete(`${this.api_url}/${id}`);
  }



}

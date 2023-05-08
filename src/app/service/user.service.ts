import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL: string = "http://localhost:3000/users";
  constructor(private http: HttpClient) { }

  getUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(this.URL);
  }

  addUser(user: any): Observable<User> {
    return this.http.post<User>(this.URL, user);
  }
}

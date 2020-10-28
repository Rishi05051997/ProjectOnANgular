import { Users } from './../staticpages/Users';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }
  url: string = "http://localhost:3000/Users";

  getUsers()
  {
    return this.http.get<Users[]>(this.url);
    
  }
}

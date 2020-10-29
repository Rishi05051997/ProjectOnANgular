import { Users } from './../staticpages/Users';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RestService {
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  }
  constructor(private http: HttpClient) { }
  url: string = "http://localhost:3000/Users";
  // Createbook(book: Users): Observable<Users>{
  //   let httpheaders = new HttpHeaders()
  //     .set('content-type', 'application/Json');
  //   let options = {
  //     headers: httpheaders
  //   };
  //   return this.http.post<Users>(this.url, book, options);
  // }

  getUsers()
  {
    return this.http.get<Users[]>(this.url);
    
  }
  deleteUser(id: number): Observable<Users>{
    const url = `${this.url}/${id}`;
    return this.http.delete<Users>(url, this.httpOptions)
  }
  getUpdateUser(id: number): Observable<Users>{
    const url = `${this.url}/${id}`;
    return this.http.get<Users>(url, this.httpOptions)
  }
  updateUser(user: Users): Observable<Users>{
    const url = `${this.url}/${user.id}`;
    return this.http.put<Users>(url,user, this.httpOptions).pipe(
      map(() => user)
    );
  }
  
  
}

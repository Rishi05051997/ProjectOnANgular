import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Users } from './users';




@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  }
  constructor(private http: HttpClient) { }
  url: string = "http://localhost:3000/Customers";

  getUsers()
  {
    return this.http.get<Users[]>(this.url);
    
  }
  deleteUser(id: number): Observable<Users>{
    const url = `${this.url}/${id}`;
    return this.http.delete<Users>(url, this.httpOptions)
  }
  getUpdateUser(firstName: string): Observable<Users>{
    const url = `${this.url}/${firstName}`;
    return this.http.get<Users>(url, this.httpOptions)
  }
  updateUser(user: Users): Observable<Users>{
    const url = `${this.url}/${user.firstName}`;
    return this.http.put<Users>(url,user, this.httpOptions).pipe(
     map(() => user)
    );
  }
  
}

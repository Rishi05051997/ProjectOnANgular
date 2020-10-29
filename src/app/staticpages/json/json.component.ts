import { Router } from '@angular/router';
import { Users } from './../Users';
import { RestService } from './../../statipages/rest.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent implements OnInit {
  // datasaved = false;
  // allbooks : Observable<Users[]>;
  users: Users[] = [];
  firstname: any;
  p: number = 1;
  constructor(private rs: RestService, private router:Router ) { }

  ngOnInit() {
    this.rs.getUsers().subscribe
      (
        (res) => {
          this.users = res;
        }
        
      );
    
  }
  Search(){
    if (this.firstname == "") {
      this.ngOnInit();
    } else {
      this.users = this.users.filter(res => {
        return res.firstname.toLocaleLowerCase().match(this.firstname.toLocaleLowerCase());
      })
    }
  }
  key: string = 'id';
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  deleteRow(val) {
    if (confirm("Are you sure to delete?")) {
      this.rs.deleteUser(val).subscribe(data => {
      });
      this.rs.getUsers().subscribe((res) => {
        this.users = res;
      });
    }
   
  }
  update(id) {
    this.router.navigate(['/update', id]);
  }
  



}

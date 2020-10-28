import { Users } from './../Users';
import { RestService } from './../../statipages/rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent implements OnInit {

  constructor(private rs: RestService) { }

  ngOnInit(): void {
    this.rs.getUsers().subscribe
      (
        (res) => {
          this.users = res;
      },
        (err) =>
        {
          console.log("Error occured :" + err);
      }  
        
    )
  }
  columns = ["User Id", "First Name", "Last Name", "Email", "Country"];

  index = ["id", "FirstName", "LastName", "email", "country"];

  users: Users[] = [];




}

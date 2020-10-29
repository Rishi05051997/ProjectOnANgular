import { Users } from './../Users';
import { RestService } from './../../statipages/rest.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(public route:ActivatedRoute, public router: Router,public  rs:RestService) { }
  val: any;
  Users: Users[] = [];
  user: Users;
  ngOnInit(): void {
    let sub = this.route.params.subscribe(params => {
      this.val = params['id'];
    });
    console.log("id :"+this.val);
    this.rs.getUpdateUser(this.val).subscribe(data => {
      this.user = data;
    })
  }
  update() {
    this.rs.updateUser(this.user).subscribe(data => {
      
    });
    this.getUsers();
    this.router.navigate(['json']);
  }
  getUsers() {
    this.rs.getUsers().subscribe((res) => {
      this.Users = res;
    })
  }

}

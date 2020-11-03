import { ServiceService } from './../demo/service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Users } from '../demo/users';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  data: any;
  data1: any;
  users: Users[] = [];
  firstname: any;
  p: number = 1;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private rs : ServiceService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      this.data = JSON.parse(atob(params.data));
    })
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
        return res.firstName.toLocaleLowerCase().match(this.firstname.toLocaleLowerCase());
      })
    }
  }
  key: string = 'firsName';
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
  update(firstName) {
    this.router.navigate(['/signup/:firstName', firstName ]);
  }
  
    
    
  


}

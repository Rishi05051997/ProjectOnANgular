import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmplyeeserviceService } from '../auth/employeeservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  email =  null;
  constructor(
    private auth: EmplyeeserviceService,
    private Router:Router,
    private toastr: ToastrService
  ) { 
    auth.getUser().subscribe((user) =>{
      console.log("USER IS:", user);
      this.email =user?.email
    })
  }

  ngOnInit(): void {
  }

  async handleSignOut(){
    try {
      await this.auth.signOut();

      this.Router.navigateByUrl("/Login");
      this.toastr.info("Logout success");
      this.email = null;


    } catch (error) {
      this.toastr.error("Problem in Signout")
    }
  }

}


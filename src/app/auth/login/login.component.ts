import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators,FormGroup} from '@angular/forms';
import { EmplyeeserviceService } from '../employeeservice.service';

import { Router } from '@angular/router';
import { NgForm } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private toastr: ToastrService,
    private router: Router,
    private auth: EmplyeeserviceService
  ) { }
  ngOnInit() { }
  onSubmit(f: NgForm) {
    const { email, password } = f.form.value;


    this.auth.signIn(email, password)
      .then((res) => {
        this.toastr.success("Log In Successfully....!!!!!");
        this.router.navigateByUrl('/')
      })
    
      .catch((err) => {
        this.toastr.error(err.message, '', {
          closeButton: true,
        });
      });
  }
}

       
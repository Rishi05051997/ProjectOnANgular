import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { finalize } from "rxjs/operators";
// Angular forms
import { NgForm } from "@angular/forms";

// auth-sevices
import { EmplyeeserviceService } from '../employeeservice.service';
import { ToastrService } from 'ngx-toastr';
// firebase
import { AngularFireStorage } from "@angular/fire/storage";
import { AngularFireDatabase } from "@angular/fire/database";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit  {
  
  
  constructor(
    private auth: EmplyeeserviceService,
    private router: Router,
    private db: AngularFireDatabase,
    private storage: AngularFireStorage,
    private toastr: ToastrService,
  ) {}

  ngOnInit(){
    
  }

  onSubmit(f: NgForm) {
    const { email, password, username, country, bio, name } = f.form.value;

    // further sanitization - do here
    

    this.auth.signUp(email, password)
      .then((res) => {
        console.log(res);
        const { uid } = res.user;

        this.db.object(`/users/${uid}`)
          .set({
            id: uid,
            name: name,
            email: email,
            instaUserName: username,
            country: country,
            bio: bio,
            
          });
      })
      .then(() => {
        this.router.navigateByUrl("/Login");
        this.toastr.success("SignUp Success");
      })
      .catch((err) => {
        this.toastr.error("Signup failed");
      });
  }

  
}
  
  

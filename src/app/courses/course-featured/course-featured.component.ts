import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmplyeeserviceService } from 'src/app/auth/employeeservice.service';

@Component({
  selector: 'app-course-featured',
  templateUrl: './course-featured.component.html',
  styleUrls: ['./course-featured.component.css']
})
export class CourseFeaturedComponent implements OnInit {

   constructor(){}

  ngOnInit(): void {
  }
 


}

import { UserprofileComponent } from './../userprofile/userprofile.component';
import { SignupComponent } from './../signup/signup.component';

import { CourseListComponent } from './course-list/course-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseDetailComponent } from './course-detail/course-detail.component';


const routes: Routes = [
  { path: 'course', component: CourseListComponent },
  { path: 'course/:id', component: CourseDetailComponent },
  {
    path: 'signup/:firstName', component: SignupComponent,
  },
  {
    path: 'userprofile', 
    component: UserprofileComponent, 
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }

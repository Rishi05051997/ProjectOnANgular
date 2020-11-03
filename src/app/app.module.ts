import { NgSelectModule } from '@ng-select/ng-select';

import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { EmplyeeserviceService } from './auth/employeeservice.service';
import {  HttpClientModule } from '@angular/common/http';


import { environment } from "./../environments/environment";
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { StaticpagesModule } from './staticpages/staticpages.module';
import { CoursesModule } from './courses/courses.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { SignupComponent } from './signup/signup.component';
import { UserprofileComponent } from './userprofile/userprofile.component'
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';



@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    UserprofileComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoursesModule,
    StaticpagesModule,
    AuthModule,
    AdminModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // Toastr
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFireDatabaseModule,

    // searching , sorting , pagination
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
   // slider
    
    // multiselect
    NgSelectModule,
    NgMultiSelectDropDownModule.forRoot(),
    
 
    
  
    

  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    CoursesModule,
    StaticpagesModule,
    AuthModule,
    AdminModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // Toastr
    BrowserAnimationsModule,
    
    
    AngularFireAuthModule,
  
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    SignupComponent,
    UserprofileComponent,
    
    
  
  ],
  providers: [EmplyeeserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

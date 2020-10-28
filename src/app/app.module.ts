
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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



@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    
    
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
  
  ],
  providers: [EmplyeeserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

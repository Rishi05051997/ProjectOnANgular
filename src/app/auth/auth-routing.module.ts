import { PagenotfoundComponent } from './../pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';

import { 
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
  redirectLoggedInTo
 } from "@angular/fire/auth-guard";

 const redirectLoggedInToHome = () => redirectLoggedInTo([""]);

const routes: Routes = [
  {
    path: "Registration",
    component: RegistrationComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToHome },
  },
  {
    path: "Login",
    component: LoginComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToHome },
  },
  
  
  {
    path: "**",
    component: PagenotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

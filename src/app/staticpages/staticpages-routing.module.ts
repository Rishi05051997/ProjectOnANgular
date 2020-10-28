import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageComponent } from './page/page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


PageComponent
ContactUsComponent
const routes: Routes = [
  { path: 'page/:slug', component: PageComponent },
  { path: 'contact', component: ContactUsComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticpagesRoutingModule { }

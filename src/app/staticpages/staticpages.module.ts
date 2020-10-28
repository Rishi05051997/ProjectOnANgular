import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticpagesRoutingModule } from './staticpages-routing.module';
import { PageComponent } from './page/page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { JsonComponent } from './json/json.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [PageComponent, ContactUsComponent, JsonComponent],
  imports: [
    CommonModule,
    StaticpagesRoutingModule,
    HttpClientModule
  ]
})
export class StaticpagesModule { }

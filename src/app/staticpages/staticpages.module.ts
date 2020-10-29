import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticpagesRoutingModule } from './staticpages-routing.module';
import { PageComponent } from './page/page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { JsonComponent } from './json/json.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { UpdateComponent } from './update/update.component';



@NgModule({
  declarations: [PageComponent, ContactUsComponent, JsonComponent, UpdateComponent],
  imports: [
    CommonModule,
    StaticpagesRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
  ]
})
export class StaticpagesModule { }

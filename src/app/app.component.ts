// import { CourseFeaturedComponent } from './courses/course-featured/course-featured.component';
// import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
// import { FooterComponent } from './footer/footer.component';
// import { HeaderComponent } from './header/header.component';
// import { BannerComponent } from './banner/banner.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularDemoProject';
  
  constructor(public router: Router){}
}

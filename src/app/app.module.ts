import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseManagmentComponent } from './course-managment/course-managment.component';
import { AutoCompleteCourseSearchComponent } from './auto-complete-course-search/auto-complete-course-search.component';
import { CourseManagementService } from './course-management.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CourseManagmentComponent,
    AutoCompleteCourseSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [CourseManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }

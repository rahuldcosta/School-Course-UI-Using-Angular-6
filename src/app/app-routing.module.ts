import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseManagmentComponent } from './course-managment/course-managment.component';
import { AutoCompleteCourseSearchComponent } from './auto-complete-course-search/auto-complete-course-search.component';

const routes: Routes = [
  { path: "", redirectTo: "search", pathMatch: "full" },
  { path: "courseAdd", component: CourseManagmentComponent },
  { path: "search", component: AutoCompleteCourseSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { CourseManagementService } from '../course-management.service';
import { Course } from '../course';
import { FormControl } from '@angular/forms';
import { $ } from 'protractor';

@Component({
  selector: 'app-auto-complete-course-search',
  templateUrl: './auto-complete-course-search.component.html',
  styleUrls: ['./auto-complete-course-search.component.css']
})
export class AutoCompleteCourseSearchComponent implements OnInit {

  constructor(private service: CourseManagementService) {
  }

  courses: Course[] = [];
  message: any;
  courseIdForDetails: number =0;

  ngOnInit() {
  }


  public findCourseDetails() {
    console.log(this.courseIdForDetails);
    let response = this.service.performCourseRead(this.courseIdForDetails);
    this.courses = [];
    response.subscribe((data) => {
      if (data != null) {
        this.courses.push(data);
        document.getElementById("searchDropDown").style.display="none";
        document.getElementById("searchResult").style.display="block";
      }
      else {
        this.message = "No Records Found for Search Query";
      }
    })
  }

  public triggerAutoCompleteByCourseName(searchQuery) {
    if (searchQuery.value.length > 0) {
      let response = this.service.doAutoComplete(searchQuery.value);
      this.courses = [];
      response.subscribe((data) => {
        if (data != null) {
          for (var k in data) {
            this.courses.push(data[k]);
          }
          document.getElementById("searchDropDown").style.display="block";
          document.getElementById("searchResult").style.display="none";
        }
        else {
          this.message = "No Records Found for Search Query";
        }
      })
    }
  }

  public setCourseIdForSearch(id: number,name:string) {
    document.getElementById("searchDropDown").style.display="none";
    document.getElementById("searchResult").style.display="none";
    (<HTMLInputElement>document.getElementById("searchQuery")).value=name;
    this.courseIdForDetails = id;
  }

}
import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseManagementService } from '../course-management.service';

@Component({
  selector: 'app-course-managment',
  templateUrl: './course-managment.component.html',
  styleUrls: ['./course-managment.component.css']
})
export class CourseManagmentComponent implements OnInit {

  course: Course = new Course(0, "", "", "", 0);
  message: any;

  constructor(private service: CourseManagementService) { }

  ngOnInit() {


  }

  public addCourse() {
    let response = this.service.performCourseAddition(this.course);
    response.subscribe((data) => this.message = data)
  }


}

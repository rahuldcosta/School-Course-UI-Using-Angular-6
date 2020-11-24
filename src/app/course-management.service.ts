import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseManagementService {


  constructor(private http: HttpClient) { }


  public performCourseAddition(course) {
    return this.http.post(environment.autoCompleteApiUrl+"course/create", course, { responseType: 'text' as 'json' });
  }

  public performCourseRead(id) {
    return this.http.get(environment.autoCompleteApiUrl+"course/read/" + id);
  }

  public doAutoComplete(searchQuery:string) {
    return this.http.get(environment.autoCompleteApiUrl+"course/search/name/"+searchQuery);
  }
}

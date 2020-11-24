import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCompleteCourseSearchComponent } from './auto-complete-course-search.component';

describe('AutoCompleteCourseSearchComponent', () => {
  let component: AutoCompleteCourseSearchComponent;
  let fixture: ComponentFixture<AutoCompleteCourseSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoCompleteCourseSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoCompleteCourseSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

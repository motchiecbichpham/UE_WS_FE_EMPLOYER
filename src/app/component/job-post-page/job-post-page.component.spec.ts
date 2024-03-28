import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPostPageComponent } from './job-post-page.component';

describe('JobPostPageComponent', () => {
  let component: JobPostPageComponent;
  let fixture: ComponentFixture<JobPostPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobPostPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobPostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../../service/job.service';
import { NotificationService } from '../../service/notification.service';
import { Job } from '../../type/job';
import { Application } from '../../type/application';

@Component({
  selector: 'app-job-detail-page',
  templateUrl: './job-detail-page.component.html',
  styleUrl: './job-detail-page.component.css',
})
export class JobDetailPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private jobService: JobService,
    private notiService: NotificationService
  ) {}
  job: Job | undefined;
  applications: Application[] = [];
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.jobService.getJob(id).subscribe(
        (data) => {
          if (data) {
            this.job = data;
          }
        },
        (error) => {
          this.notiService.showNotification(
            error.error.message,
            'Close',
            false
          );
        }
      );
      this.jobService.getApplications(id).subscribe(
        (data) => {
          if (data) {
            this.applications = data;
          }
        },
        (error) => {
          this.notiService.showNotification(
            error.error.message,
            'Close',
            false
          );
        }
      );
    });
  }
  downloadCV(application: Application) {
    this.jobService.getResume(application.id).subscribe(
      (data) => {
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(data);
        link.download = application.resumeName;
        link.click();
      },
      (error) => {
        this.notiService.showNotification(error.error.message, 'Close', false);
      }
    );
  }
}

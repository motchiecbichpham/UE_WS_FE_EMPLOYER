import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from '../../service/job.service';
import { Job, JobContractType, JobHiringStatus } from '../../type/job';
import { Company } from '../../type/company';
import { CONSTANT } from '../../api/constants';
import { NotificationService } from '../../service/notification.service';

@Component({
  selector: 'app-job-post-page',
  templateUrl: './job-post-page.component.html',
  styleUrl: './job-post-page.component.css',
})
export class JobPostPageComponent {
  workplaces = CONSTANT.cities;
  minDate: Date;
  jobForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    salary: ['', Validators.required],
    workplace: ['', Validators.required],
    yearOfExp: ['', Validators.required],
    contract: ['', Validators.required],
    expiredDate: ['', Validators.required],
    status: ['', Validators.required],
    amountHiring: ['', Validators.required],
    company: [{ id: '' }],
    createdDate:[null],
    id: [null],
  });
  contractTypes = this.getTitles(JobContractType);
  statusHring = this.getTitles(JobHiringStatus);
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private jobService: JobService,
    private route: ActivatedRoute,
    private notiService: NotificationService
  ) {
    this.minDate = new Date();
  }
  id = null;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      if (this.id) {
        this.jobService.getJob(this.id).subscribe(
          (data) => {
            this.jobForm.setValue(data);
          },
          (error) => {
            this.notiService.showNotification(
              error.error.message,
              'Close',
              false
            );
          }
        );
      }
    });
  }

  onSubmit() {
    if (this.jobForm.invalid) {
      return;
    }
    const profile = localStorage.getItem('companyProfile');
    const profileCompany: Company = profile ? JSON.parse(profile) : null;
    this.jobForm.value.company = profileCompany;
    if (this.id) {
      this.updateJob(this.id);
    } else {
      this.postJob();
    }
  }
  postJob() {
    this.jobService.postJob(this.jobForm.value).subscribe(
      (response) => {
        this.router.navigate(['/home']);
        this.notiService.showNotification('Post job successfully', 'Close');
      },
      (error) => {
        this.notiService.showNotification(error.error.message, 'Close', false);
      }
    );
  }
  updateJob(id: number) {
    this.jobService.updateJob(this.jobForm.value, id).subscribe(
      (response) => {
        this.router.navigate(['/home']);
        this.notiService.showNotification('Update job successfully', 'Close');
      },
      (error) => {
        this.notiService.showNotification(error.error.message, 'Close', false);
      }
    );
  }
  getTitles(type: any): string[] {
    const titles: string[] = [];
    for (let t in type) {
      if (isNaN(Number(t))) {
        titles.push(t);
      }
    }
    return titles;
  }
}

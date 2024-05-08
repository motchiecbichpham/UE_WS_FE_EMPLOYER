import { Component, HostListener, OnInit } from '@angular/core';
import { JobService } from '../../service/job.service';
import { Job } from '../../type/job';
import { Router } from '@angular/router';
import { Company } from '../../type/company';
import { NotificationService } from '../../service/notification.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit {
  jobs: Job[] = [];
  dataJobs: Job[] = [];
  nullJob: Job = {
    company: {
      id: undefined,
      name: '',
      contact: '',
      address: '',
      city: '',
      introduction: '',
      description: '',
      password: '',
    },
    title: '',
    description: '',
    salary: 0,
    workplace: '',
    yearOfExp: 0,
    contract: '',
    expiredDate: new Date(),
    status: '',
    amountHiring: 0,
    id: -1,
  };
  constructor(
    private jobService: JobService,
    private router: Router,
    private notiService: NotificationService
  ) {}
  ngOnInit(): void {
    const profile = localStorage.getItem('companyProfile');
    const profileCompany: Company = profile ? JSON.parse(profile) : null;
    const id = profileCompany?.id ? profileCompany.id : -1;
    this.jobService.getJobs(id).subscribe(
      (data) => {
        if (data) {
          this.jobs = data;
          this.dataJobs = data;
          this.setNumberOfItems(window.innerWidth, this.dataJobs);
        }
      },
      (error) => {
        this.notiService.showNotification('Load jobs failed', 'Close', false);
      }
    );
  }
  viewJob(id: number) {
    this.router.navigate(['/job-detail', id]);
  }
  setNumberOfItems(width: number, listJ: Job[]): void {
    if (width < 968) {
      this.jobs = listJ;
    } else if (width >= 968 && width < 1432) {
      if (listJ.length % 2 == 1) {
        this.jobs = [...listJ, this.nullJob];
      }
    } else {
      if (listJ.length % 3 == 1) {
        this.jobs = [...listJ, this.nullJob, this.nullJob];
      } else if (listJ.length % 3 == 2) {
        this.jobs = [...listJ, this.nullJob];
      }
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setNumberOfItems(event.target.innerWidth, this.dataJobs);
  }
}

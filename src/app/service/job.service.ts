import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job } from '../type/job';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../api/api.config';
import { Application } from '../type/application';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor(private http: HttpClient) {}
  postJob(job: Job): Observable<Job> {
    const endpoint = API_ENDPOINTS.job.postJob;
    return this.http.post<Job>(endpoint, job);
  }
  getJobs(companyId: number): Observable<Job[]> {
    const endpoint = API_ENDPOINTS.job.getJobs;
    return this.http.get<Job[]>(endpoint, {
      params: { companyId: companyId.toString() },
    });
  }
  getJob(id: number): Observable<Job> {
    const endpoint = API_ENDPOINTS.job.getJob + `${id}`;
    return this.http.get<Job>(endpoint);
  }
  getApplications(jobId: number): Observable<Application[]> {
    const endpoint = API_ENDPOINTS.job.getApplications;
    return this.http.get<Application[]>(endpoint, {
      params: { jobId: jobId.toString() },
    });
  }
  getResume(id: number): Observable<Blob> {
    const endpoint = API_ENDPOINTS.job.getResumeByApplication + `${id}`;
    return this.http.get(endpoint, { responseType: 'blob' });
  }
  updateJob(job: Job, id: number): Observable<Job> {
    const endpoint = API_ENDPOINTS.job.getJob + `${id}`;
    return this.http.put<Job>(endpoint, job, {
      responseType: 'json',
    });
  }
}

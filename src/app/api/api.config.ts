import { environment } from '../../environments/environment.development';

export const API_ENDPOINTS = {
  auth: {
    signup: environment.apiUrl + '/sign-up',
    login: environment.apiUrl + '/login',
    getCompany: environment.apiUrl + '/',
  },
  job: {
    postJob: environment.apiUrl + '/create-job',
    getJob: environment.apiUrl + '/job/',
    getJobs: environment.apiUrl + '/job',
    getApplications: environment.apiUrl + '/application',
    getResumeByApplication: environment.apiUrl+'/file-application/'
  },
};

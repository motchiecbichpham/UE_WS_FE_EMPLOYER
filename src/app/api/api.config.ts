// api.config.ts
export const API_ENDPOINTS = {
  auth: {
    login: '/api/auth/login',
    signup: '/api/auth/signup',
  },
  job: {
    getAllJobs: '/api/jobs',
    getJobById: (id: number) => `/api/jobs/${id}`,
  },
};

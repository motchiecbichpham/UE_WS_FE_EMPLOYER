import { Job } from './job';
type Candidate = {
  id: number;
  firstName: string;
  lastName: string;
  dob: Date;
  email: string;
  password: string;
  phone: string;
  introduction?: string;
};

export type Application = {
  id: number;
  job: Job;
  candidate: Candidate;
  resumeName: string;
};


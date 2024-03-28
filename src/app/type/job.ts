import { Company } from './company';

export type Job = {
  company: Company;
  title: string;
  description: string;
  salary: number;
  workplace: string;
  yearOfExp: number;
  contract: string;
  expiredDate: Date;
  status: number;
  amountHiring: number;
};

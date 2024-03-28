import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = environment.apiUrl;

  constructor() {}

  // getAuthLoginEndpoint() {
  //   return `${this.baseUrl}/auth/login`;
  // }

  getAuthSignupEndpoint() {
    return `${this.baseUrl}`;
  }
}

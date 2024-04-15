import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../type/company';
import { API_ENDPOINTS } from '../api/api.config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(response: String): Observable<String> {
    const endpoint = API_ENDPOINTS.auth.signup;
    return this.http.post<String>(endpoint, response);
  }
  login(company: Company): Observable<{ token: string; company: Company }> {
    const endpoint = API_ENDPOINTS.auth.login;
    return this.http.post<{ token: string; company: Company }>(
      endpoint,
      company,
      {
        responseType: 'json',
      }
    );
  }
  getCompany(id: number): Observable<Company> {
    const endpoint = API_ENDPOINTS.auth.getCompany + `${id}`;
    return this.http.get<Company>(endpoint);
  }
  updateCompany(company: Company): Observable<Company> {
    const endpoint = API_ENDPOINTS.auth.getCompany + `${company.id}`;
    return this.http.put<Company>(endpoint, company, {
      responseType: 'json',
    });
  }
}

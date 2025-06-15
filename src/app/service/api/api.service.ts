import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://depannage-piscine.com/api';

  // private baseUrl = 'http://127.0.0.1:3000/api'


  constructor(private http: HttpClient) {}

  // --- CONTACTS ---
  submitContact(contact: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/contacts/submit`, contact);
  }

  getContacts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/contacts/list`);
  }

  // --- FORMS ---
  submitForm(form: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/forms/submit`, form);
  }

  getForms(): Observable<any> {
    return this.http.get(`${this.baseUrl}/forms/list`);
  }
}

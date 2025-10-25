import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Your backend API URL
  private apiUrl = 'https://my-backend-api-hpa4hugcdcg0ekf9.eastasia-01.azurewebsites.net/api/hello';

  constructor(private http: HttpClient) { }

  // Method to call the API
  getHello(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}

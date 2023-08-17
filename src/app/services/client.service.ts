import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiUrl: string = "https://reqres.in/api/";

  constructor(private http: HttpClient) { }

  getClients(pageNumber: number, pageSize: number): Observable<any> {
    return this.http.get(this.apiUrl + "users?page=" + pageNumber + "&per_page=" + pageSize);
  }

  getClientById(id: string): Observable<any> {
    return this.http.get(this.apiUrl + "users/" + id);
  }
}

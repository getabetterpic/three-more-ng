import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SetsService {

  constructor(private http: HttpClient) { }

  public index(): Observable<{ sets: any[] }> {
    return this.http.get<{ sets: any[] }>('/sets');
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(
    private http: HttpClient
  ) { }

  public index(search: string = '', page: string = '1', perPage?: string): Observable<any> {
    const params = { search, page, perPage };
    return this.http.get('/api/v1/cards', { params });
  }
}

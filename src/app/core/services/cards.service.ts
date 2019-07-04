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
    const params = { q: search, page, perPage };
    if (params.q == null) { delete params.q; }
    return this.http.get('/cards', { params });
  }

  public show(cardId: string): Observable<any> {
    return this.http.get(`/cards/${cardId}`);
  }
}

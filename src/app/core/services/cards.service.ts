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

  public index(search: string = '', page: string = '1', ids?: string[], perPage?: string): Observable<any> {
    const params = { q: search, page, perPage, ids };
    for (const param in params) {
      if (params.hasOwnProperty(param)) {
        if (!params[param]) { delete params[param]; }
      }
    }
    return this.http.get('/cards', { params });
  }

  public show(cardId: string): Observable<any> {
    return this.http.get(`/cards/${cardId}`);
  }
}

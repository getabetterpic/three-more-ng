import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Card } from '@/app/models/card';

interface IndexOptions {
  search?: string;
  page?: string;
  ids?: string[];
  perPage?: string;
  standard_legal?: string;
  set?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(
    private http: HttpClient
  ) { }

  public index(options: IndexOptions = {}): Observable<{ cards: Card[] }> {
    const { search, page, perPage, ids, standard_legal, set } = options;
    const params = { q: search, page, perPage, ids, standard_legal, set };
    for (const param in params) {
      if (params.hasOwnProperty(param)) {
        if (!params[param]) { delete params[param]; }
      }
    }
    return this.http.get<{ cards: Card[] }>('/cards', { params });
  }

  public show(cardId: string): Observable<any> {
    return this.http.get(`/cards/${cardId}`);
  }
}

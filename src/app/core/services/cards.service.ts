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
  modern_legal?: string;
  mana_cost?: string;
  cmc?: string;
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
    const params = { q: options.search, ...options };
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

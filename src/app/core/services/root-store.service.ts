import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '@/app/store';

@Injectable({
  providedIn: 'root'
})
export class RootStoreService {
  public queryParams$ = this.store.select(fromRoot.getQueryParams);

  constructor(
    private store: Store<fromRoot.State>
  ) { }
}

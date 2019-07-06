import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';

import { Store } from '@ngrx/store';

import * as fromStore from '../store';

@Injectable()
export class CardsGuard implements CanActivate {
  constructor(private store: Store<fromStore.CardsState>) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return of({}).pipe(
      tap(() => {
        this.store.dispatch(fromStore.loadCards({}));
      }),
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }
}

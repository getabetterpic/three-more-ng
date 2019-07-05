import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as RouterActions from '../actions/router.actions';

@Injectable()
export class RouterEffects {
  navigate$ = createEffect(() => this.actions$.pipe(
    ofType(RouterActions.Go),
    tap(({ path, query: queryParams, extras }) => {
      this.router.navigate(path, { queryParams, ...extras });
    })
  ), { dispatch: false });

  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location
  ) {}
}

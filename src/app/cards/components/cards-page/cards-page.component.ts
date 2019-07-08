import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import * as fromRoot from '@/app/store';

@Component({
  selector: 'tmm-cards-page',
  templateUrl: './cards-page.component.html',
  styleUrls: ['./cards-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsPageComponent implements OnInit, OnDestroy {
  public searchInput = new FormControl('');

  private destroy = new Subject();

  constructor(private store: Store<fromRoot.State>) {}

  public ngOnInit(): void {
    this.searchInput.valueChanges.pipe(
      filter((search) => !!search),
      takeUntil(this.destroy)
    ).subscribe((search) => {
      this.store.dispatch(fromRoot.Go({ path: ['/cards'], query: { search } }));
    });
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, takeUntil } from 'rxjs/operators';

import { Store } from '@ngrx/store';

import * as fromRoot from '@/app/store';

@Component({
  selector: 'tmm-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit, OnDestroy {
  public searchText = new FormControl('');

  private destroy = new Subject<void>();

  constructor(
    private store: Store<fromRoot.State>
  ) { }

  public ngOnInit() {
    this.subscribeToSearch();
    this.store.select(fromRoot.getQueryParams).pipe(
      map(({ search }) => search),
      distinctUntilChanged(),
      takeUntil(this.destroy)
    ).subscribe((search) => {
      this.searchText.setValue(search, { emitEvent: false });
    });
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  private subscribeToSearch(): void {
    this.searchText.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      takeUntil(this.destroy)
    ).subscribe((text) => {
      this.store.dispatch(fromRoot.Go({ path: ['/cards'], query: { search: text } }));
    });
  }

}

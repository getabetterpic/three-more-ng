import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { map, startWith, switchMap, takeUntil, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import * as fromRoot from '@/app/store';

import { SetsService } from '@/app/core/services/sets.service';

@Component({
  selector: 'tmm-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit, OnDestroy {
  public searchForm: FormGroup;
  public filteredSets: Observable<any[]>;
  public setSearch = new FormControl('');

  private sets: any[] = [];
  private destroy = new Subject<void>();

  constructor(
    private store: Store<fromRoot.State>,
    private setsService: SetsService,
    formBuilder: FormBuilder
  ) {
    this.searchForm = formBuilder.group({
      search: '',
      standard_legal: false,
      modern_legal: false,
      set: ''
    });
  }

  public ngOnInit(): void {
    this.filteredSets = this.setsService.index().pipe(
      switchMap((resp) => {
        this.sets = resp.sets;
        return this.setSearch.valueChanges
          .pipe(
            startWith(''),
            map((name) => name ? this.filter(name) : [...this.sets])
          );
      }),
      takeUntil(this.destroy)
    );
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  public searchCards(): void {
    this.store.dispatch(
      fromRoot.Go({ path: ['/cards'], query: { ...this.searchForm.value }})
    );
  }

  private filter(name: string): any[] {
    const filterValue = name.toLowerCase();

    return this.sets.filter((set) => set.name.toLowerCase().indexOf(filterValue) !== -1);
  }

}

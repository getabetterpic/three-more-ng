import { Component, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, takeUntil } from 'rxjs/operators';

import { Store } from '@ngrx/store';

import * as fromRoot from '@/app/store';

@Component({
  selector: 'tmm-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchInputComponent),
      multi: true
    }
  ]
})
export class SearchInputComponent implements OnInit, OnDestroy, ControlValueAccessor {
  @Input() public showAdvanced = false;
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

  public writeValue(search: string): void {
    this.searchText.setValue(search);
  }

  public onChange = (search: string) => {};
  public onTouched = () => {};

  public registerOnChange(fn: (search: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  private subscribeToSearch(): void {
    this.searchText.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      takeUntil(this.destroy)
    ).subscribe((text) => {
      this.onChange(text);
    });
  }

}

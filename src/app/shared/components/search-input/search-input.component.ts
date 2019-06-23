import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'tmm-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit, OnDestroy {
  @Output() public searchChange = new EventEmitter<string>();
  public searchText = new FormControl('');

  private destroy = new Subject<void>();

  constructor() { }

  public ngOnInit() {
    this.subscribeToSearch();
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
      this.searchChange.emit(text);
    });
  }

}

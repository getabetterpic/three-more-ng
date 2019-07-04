import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { OnChange } from '@/app/core/decorators/on-change';
import { CardsStoreService } from '@/app/cards/services/cards-store.service';

@Component({
  selector: 'tmm-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit, OnDestroy {
  @OnChange<string>(function(value) {
    this.searchText.setValue(value, { emitEvent: false });
  })
  @Input() public initialSearch: string;
  @Output() public searchChange = new EventEmitter<string>();
  public searchText = new FormControl('');

  private destroy = new Subject<void>();

  constructor(
    private cardsStore: CardsStoreService
  ) { }

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
      this.cardsStore.updateSearch(text);
    });
  }

}

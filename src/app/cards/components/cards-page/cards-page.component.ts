import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { CardsStoreService } from '@/app/cards/services/cards-store.service';
import { distinctUntilChanged, filter, map, takeUntil } from 'rxjs/operators';
import { RootStoreService } from '@/app/core/services/root-store.service';

@Component({
  selector: 'tmm-cards-page',
  templateUrl: './cards-page.component.html',
  styleUrls: ['./cards-page.component.scss']
})
export class CardsPageComponent implements OnInit, OnDestroy {
  private destroy = new Subject();

  constructor(
    public cardsStore: CardsStoreService,
    private router: Router,
    private rootStore: RootStoreService
  ) { }

  public ngOnInit() {
    this.watchQueryParams();
    this.navigateOnSearchChange();
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  private watchQueryParams(): void {
    this.rootStore.queryParams$.pipe(
      map((queryParams) => queryParams.search),
      distinctUntilChanged(),
      takeUntil(this.destroy)
    ).subscribe((search) => {
      this.cardsStore.updateSearch(search);
    });
  }

  private navigateOnSearchChange(): void {
    this.cardsStore.searchTerm$.pipe(
      filter((search) => !!search),
      distinctUntilChanged(),
      takeUntil(this.destroy)
    ).subscribe((search) => {
      this.router.navigate(['./'], { queryParams: { search } });
    });
  }

}

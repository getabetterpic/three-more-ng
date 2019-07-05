import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CardsStoreService } from '@/app/cards/services/cards-store.service';

@Component({
  selector: 'tmm-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  public cards$: Observable<any[]>;

  constructor(
    private cardsStore: CardsStoreService
  ) { }

  public ngOnInit(): void {
    this.cards$ = this.cardsStore.cards$;
  }

}

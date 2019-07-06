import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CardsStoreService } from '@/app/cards/services/cards-store.service';
import { Card } from '@/app/models/card';

@Component({
  selector: 'tmm-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardListComponent implements OnInit {
  public cards$: Observable<Card[]>;

  constructor(
    private cardsStore: CardsStoreService
  ) { }

  public ngOnInit(): void {
    this.cards$ = this.cardsStore.cards$;
  }

}

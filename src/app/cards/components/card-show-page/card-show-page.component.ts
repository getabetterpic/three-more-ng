import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CardsStoreService } from '@/app/cards/services/cards-store.service';
import { Card } from '@/app/models/card';

@Component({
  selector: 'tmm-card-show-page',
  templateUrl: './card-show-page.component.html',
  styleUrls: ['./card-show-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardShowPageComponent implements OnInit {
  public card$: Observable<Card>;

  constructor(
    private cardsStore: CardsStoreService
  ) { }

  public ngOnInit(): void {
    this.card$ = this.cardsStore.selectedCard$;
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardsService } from '../../../core/services/cards.service';

@Component({
  selector: 'tmm-card-show-page',
  templateUrl: './card-show-page.component.html',
  styleUrls: ['./card-show-page.component.scss']
})
export class CardShowPageComponent implements OnInit {
  public card: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private cardsService: CardsService
  ) { }

  public ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const cardId = paramMap.get('cardId');
      this.cardsService.show(cardId).subscribe((card) => {
        this.card = card;
      });
    });
  }

}

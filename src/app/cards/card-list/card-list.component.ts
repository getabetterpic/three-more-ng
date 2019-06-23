import { Component, OnInit } from '@angular/core';
import { CardsService } from '../../core/services/cards.service';

@Component({
  selector: 'tmm-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  public cards: any[] = [];

  constructor(
    private cardsService: CardsService
  ) { }

  public ngOnInit() {
    this.getCards();
  }

  private getCards(search: string = ''): void {
    this.cardsService.index(search).subscribe((data) => {
      this.cards = data.cards;
    });
  }

}

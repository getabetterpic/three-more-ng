import { Component, Input, OnInit } from '@angular/core';
import { CardsService } from '../../core/services/cards.service';
import { OnChange } from '../../core/decorators/on-change';

@Component({
  selector: 'tmm-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  @OnChange<string>(function(searchText) {
    this.getCards(searchText);
  })
  @Input() public searchText: string;
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

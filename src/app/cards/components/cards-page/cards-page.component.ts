import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardsStoreService } from '@/app/cards/services/cards-store.service';

@Component({
  selector: 'tmm-cards-page',
  templateUrl: './cards-page.component.html',
  styleUrls: ['./cards-page.component.scss']
})
export class CardsPageComponent implements OnInit {
  public searchText = '';

  constructor(
    public cardsStore: CardsStoreService,
    private router: Router
  ) { }

  public ngOnInit() {
    this.cardsStore.searchTerm$.subscribe((search) => {
      this.router.navigate(['./'], { queryParams: { search } });
    });
  }

}

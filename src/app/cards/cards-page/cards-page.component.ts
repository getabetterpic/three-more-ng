import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tmm-cards-page',
  templateUrl: './cards-page.component.html',
  styleUrls: ['./cards-page.component.scss']
})
export class CardsPageComponent implements OnInit {
  public searchText = '';

  constructor() { }

  public ngOnInit() {
  }

}

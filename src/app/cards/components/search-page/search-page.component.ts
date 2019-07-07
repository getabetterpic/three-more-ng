import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromRoot from '@/app/store';

@Component({
  selector: 'tmm-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent {
  public searchForm: FormGroup;

  constructor(
    private store: Store<fromRoot.State>,
    formBuilder: FormBuilder
  ) {
    this.searchForm = formBuilder.group({
      search: '',
      standard_legal: false,
    });
  }

  public searchCards(): void {
    this.store.dispatch(
      fromRoot.Go({ path: ['/cards'], query: { ...this.searchForm.value }})
    );
  }

}

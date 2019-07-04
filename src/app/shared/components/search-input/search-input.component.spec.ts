import { fakeAsync, tick } from '@angular/core/testing';

import { SearchInputComponent } from './search-input.component';

describe('SearchInputComponent', () => {
  let component: SearchInputComponent;

  beforeEach(() => {
    component = new SearchInputComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('emits the searchCards text after 1 second', fakeAsync(() => {
      spyOn(component.searchChange, 'emit');
      component.ngOnInit();
      component.searchText.setValue('Experimental Frenzy');
      tick(1000);
      expect(component.searchChange.emit).toHaveBeenCalledWith('Experimental Frenzy');
    }));
  });
});

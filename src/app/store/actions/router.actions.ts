import { createAction, props } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

export const Go = createAction('[Router] Go', props<{ path: any[], query?: any, extras?: NavigationExtras }>());
export const Back = createAction('[Router] Back');
export const Forward = createAction('[Router] Forward');

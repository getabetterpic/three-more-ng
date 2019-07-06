import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'tmm-cards-page',
  templateUrl: './cards-page.component.html',
  styleUrls: ['./cards-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsPageComponent {
}

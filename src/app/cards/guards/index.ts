import { CardExistsGuard } from '@/app/cards/guards/card-exists.guard';
import { CardsGuard } from '@/app/cards/guards/cards.guard';

export const guards: any[] = [CardExistsGuard, CardsGuard];

export * from '@/app/cards/guards/card-exists.guard';
export * from '@/app/cards/guards/cards.guard';

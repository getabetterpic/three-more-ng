export interface Card {
  id: string;
  name: string;
  set: string;
  image: string;
  png: string;
  art: string;
  card_type: string;
  card_text: string;
  power: number;
  toughness: number;
  legalities: string[];
}

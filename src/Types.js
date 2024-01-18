// Types.ts (or any filename you prefer)
export interface Card {
    id: string;
    Name: string;
    Path: string;
    Summary: string;
  }
  
export interface Deck {
    Deck: string;
    Cards: Card[];
}
  
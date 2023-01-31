export interface BookSpecies {
  name: string;
}
export interface Book {
  bookId: number;
  title: string;
  species?: BookSpecies;
}

export interface PokemonSpecies {
  name: string;
}
export interface Pokemon {
  id: number;
  title: string;
  species?: PokemonSpecies;
}

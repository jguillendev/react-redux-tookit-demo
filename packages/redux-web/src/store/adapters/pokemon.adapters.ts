import { createEntityAdapter } from "@reduxjs/toolkit";
import { Pokemon } from "../interfaces/pokemon.interfaces";
import { RootState } from "../store.app";

export const pokemonAdapter = createEntityAdapter<Pokemon>({
  selectId: (pokemon) => pokemon.id,
  sortComparer: (a, b) => a.title.localeCompare(b.title),
});

export const {
  selectById: selectPokemonById,
  selectIds: selectPokemonIds,
  selectEntities: selectPokemonEntities,
  selectAll: selectAllPokemons,
  selectTotal: selectTotalPokemons,
} = pokemonAdapter.getSelectors((state: RootState) => state.pokemon);

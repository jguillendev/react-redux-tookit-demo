import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { pokemonAdapter } from "../adapters/pokemon.adapters";
import { Pokemon } from "../interfaces/pokemon.interfaces";

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: pokemonAdapter.getInitialState(),
  reducers: {
    pokemonAdded: pokemonAdapter.addOne,
    remove: pokemonAdapter.removeOne,
    pokemonsReceived(
      state,
      action: PayloadAction<{ pokemons: Array<Pokemon> }>
    ) {
      console.log(
        "pokemonSlice:reducers:pokemonReceived:pokemons: ",
        action.payload.pokemons
      );
      pokemonAdapter.setAll(state, action.payload.pokemons);
    },
  },
});

// Exportando el reducer para agregarlo al configureStore
export default pokemonSlice.reducer;

// Action creators are generated for each case reducer function
export const { pokemonAdded, pokemonsReceived, remove } = pokemonSlice.actions;

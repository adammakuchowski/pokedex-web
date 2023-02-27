import {Pokemon} from '../../../types/types';

export interface PokemonTypes {
  slot: number;
  type: {
    name: string;
    url: string;
  }
}

export interface PokemonDetails {
  name: string;
  order: number;
  sprites: {
    front_default: any;
  }
  types: PokemonTypes[];
}

export interface PokemonCardProps {
  pokemonData: Pokemon;
}

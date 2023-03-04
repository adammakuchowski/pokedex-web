import {Pokemon} from '../../../types/types';

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  }
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: {
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
  types: PokemonType[];
}

export interface PokemonCardProps {
  pokemonData: Pokemon;
  openPokemonModal: Function;
  setPokemonModalData: Function;
}

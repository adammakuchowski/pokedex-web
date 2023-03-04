import {PokemonData} from '../../types/types'
import {PokemonStat, PokemonType} from './PokemonCard/types'

export interface PokedexProps {
  pokemons: PokemonData;
}

export interface PokemonModalData {
  modalBackgroundColor?: string;
  types?: PokemonType[];
  stats?: PokemonStat[];
  [key: string]: any;
}

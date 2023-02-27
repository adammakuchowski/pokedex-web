import {PokemonTypes} from './constants'
import {PokemonDetails} from './types'

export const setPokemonCardColor = (pokemonDetails: PokemonDetails) => {
  const pokemonType = pokemonDetails.types[0].type.name

  switch (pokemonType) {
    case PokemonTypes.Bug:
      return '#A6B91A'
    case PokemonTypes.Dark:
      return '#705746'
    case PokemonTypes.Dragon:
      return '#6F35FC'
    case PokemonTypes.Electric:
      return '#F7D02C'
    case PokemonTypes.Fairy:
      return '#D685AD'
    case PokemonTypes.Fighting:
      return '#C22E28'
    case PokemonTypes.Fire:
      return '#EE8130'
    case PokemonTypes.Flying:
      return '#A98FF3'
    case PokemonTypes.Ghost:
      return '#735797'
    case PokemonTypes.Grass:
      return '#7AC74C'
    case PokemonTypes.Ground:
      return '#E2BF65'
    case PokemonTypes.Ice:
      return '#96D9D6'
    case PokemonTypes.Normal:
      return '#A8A77A'
    case PokemonTypes.Poison:
      return '#A33EA1'
    case PokemonTypes.Psychic:
      return '#F95587'
    case PokemonTypes.Rock:
      return '#B6A136'
    case PokemonTypes.Shadow:
      return '#00f400'
    case PokemonTypes.Steel:
      return '#B7B7CE'
    case PokemonTypes.Unknown:
      return '#00f400'
    case PokemonTypes.Water:
      return '#6390F0'
    default:
      return '#ffffff'
  }
}

import {useContext, useEffect} from 'react'
import {PokemonCard} from './PokemonCard/PokemonCard'
import {PokedexContainer} from './PokedexStyled'
import {PokedexProps} from './types'
import ThemeContext from '../../context/themeContext'

export const Pokedex = ({
  pokemons
}: PokedexProps): JSX.Element | null => {
  const themeContext = useContext(ThemeContext)
  const {backgroundColor} = themeContext.themeColor

  const {results} = pokemons

  if(!results || results.length === 0) return null

  return (
    <PokedexContainer style={{backgroundColor: backgroundColor}}>
      {results.map(results => (
        <PokemonCard key={results.name} pokemonData={results}/>
      ))}
    </PokedexContainer>
  )
}


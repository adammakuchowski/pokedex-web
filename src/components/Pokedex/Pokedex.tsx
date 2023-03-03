import {useContext, useEffect, useState} from 'react'
import {PokemonCard} from './PokemonCard/PokemonCard'
import {PokedexContainer} from './PokedexStyled'
import ThemeContext from '../../context/themeContext'
import {PokemonModal} from './PokemonModal/PokemonModal'
import {PokedexProps, PokemonModalData} from './types'

export const Pokedex = ({
  pokemons
}: PokedexProps): JSX.Element | null => {
  const themeContext = useContext(ThemeContext)
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const [modalData, setModalData] = useState<PokemonModalData>({})

  const {pokedexBackgroundColor} = themeContext.themeColor

  const {results} = pokemons

  if(!results || results.length === 0) return null

  return (
    <PokedexContainer style={{backgroundColor: pokedexBackgroundColor}}>
      {results.map(results => (
        <PokemonCard 
          key={results.name}
          pokemonData={results} 
          openPokemonModal={setModalIsOpen}
          setPokemonModalData={setModalData}
          />
      ))}
      {modalIsOpen && (
        <PokemonModal closePokemonModal={setModalIsOpen} pokemonModalData={modalData}/>
      )}
    </PokedexContainer>
  )
}

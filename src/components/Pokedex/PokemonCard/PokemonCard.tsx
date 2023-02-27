import {useEffect, useState} from 'react'
import axios, {Canceler} from 'axios'
import {PokemonCardProps, PokemonDetails} from './types'
import {
  LoadingSpinnerWrapper,
  PokemonCardBody,
  PokemonCardContainer,
  PokemonCardHeader,
  PokemonIndex,
  PokemonInfo,
  PokemonName,
  PokemonSprite
} from './PokemonCardStyled'
import {setPokemonCardColor} from './utils'
import {LoadingSpinner} from '../../UI/LoadingSpinner/LoadingSpinner'

export const PokemonCard = ({
  pokemonData,
}: PokemonCardProps): JSX.Element | null => {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails>()
  const [loadingData, setLoadingData] = useState<boolean>(true)

  const [cardColor, setCardColor] = useState<string>('#ffffff')

  const pokemonUrl = pokemonData.url

  const getPokemonDetails = async (): Promise<Function> => {
    setLoadingData(true)
    let cancel: Canceler

    axios.get(pokemonUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setPokemonDetails(res.data)

      setLoadingData(false)
    })

    return () => cancel()
  }

  useEffect(() => {
    getPokemonDetails()
  }, [])

  useEffect(() => {
    if(pokemonDetails){
      const color = setPokemonCardColor(pokemonDetails)
      setCardColor(color)
    }
  }, [pokemonDetails])


  if (!pokemonDetails || loadingData) {
      return (
        <LoadingSpinnerWrapper>
          <LoadingSpinner/>
        </LoadingSpinnerWrapper>
      )
  }

  return (
    <PokemonCardContainer style={{backgroundColor: cardColor}}>
      <PokemonCardHeader>
        <PokemonName>{pokemonDetails.name}</PokemonName>
        <PokemonIndex>{pokemonDetails.order}#</PokemonIndex>
      </PokemonCardHeader>
      <PokemonCardBody>
        <PokemonSprite src={pokemonDetails.sprites.front_default} />
        <PokemonInfo>
          {pokemonDetails.types.map(type => (
            <div>{type.type.name}</div>
          ))}
        </PokemonInfo>
      </PokemonCardBody>
    </PokemonCardContainer>
  )
}

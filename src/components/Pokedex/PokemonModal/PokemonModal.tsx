import {useEffect} from 'react'
import {IoIosCloseCircle} from 'react-icons/io'
import {PokemonModalData} from '../types'
import {
  CloseButtonContainer,
  CloseButtonWrapper,
  PokemonModalContainer,
  PokemonModalOverlay,
  PokemonModalWrapper,
  PokemonName,
  PokemonSprite,
  PokemonSpriteContainer,
  PokemonStatisticsBox,
  PokemonStatisticsContainer,
  PokemonStatisticsWrapper,
  PokemonTypeContainer,
} from './PokemonModalStyled'
import {StatisticBar} from './StatisticBar/StatisticBar'

interface PokemonModalProps {
  closePokemonModal: Function;
  pokemonModalData: PokemonModalData;
}

export const PokemonModal = ({
  closePokemonModal,
  pokemonModalData
}: PokemonModalProps): JSX.Element => {
  const {modalBackgroundColor} = pokemonModalData
  const closeModal = () => {
    closePokemonModal(false)
  }

  return (
    <PokemonModalContainer>
      <PokemonModalOverlay/>

      <PokemonModalWrapper style={{backgroundColor: modalBackgroundColor}}>
        <CloseButtonContainer>
          <CloseButtonWrapper onClick={closeModal}>
            <IoIosCloseCircle/>
          </CloseButtonWrapper>
        </CloseButtonContainer>

        <PokemonSpriteContainer>
          <PokemonName>{pokemonModalData.name}</PokemonName>
          <PokemonSprite src={pokemonModalData.sprites.front_default} />
        </PokemonSpriteContainer>

        <PokemonStatisticsContainer>
          {pokemonModalData.types && (
              <PokemonTypeContainer>
                {pokemonModalData.types.map(type => (
                  <div>{type.type.name}</div>
                ))}
            </PokemonTypeContainer>
          )}


          <PokemonStatisticsWrapper>
            <PokemonStatisticsBox>
              {pokemonModalData.stats && pokemonModalData.stats.map(stat => (
                <StatisticBar base_stat={stat.base_stat} effort={stat.effort} stat={stat.stat}/>
                ))
              }
            </PokemonStatisticsBox>
          </PokemonStatisticsWrapper>


        </PokemonStatisticsContainer>
      </PokemonModalWrapper>
    </PokemonModalContainer>
  )
}

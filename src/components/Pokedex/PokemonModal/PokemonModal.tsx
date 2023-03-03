import {useEffect} from 'react';
import {IoIosCloseCircle} from 'react-icons/io'
import {PokemonModalData} from '../types'
import {
  CloseButtonContainer,
  CloseButtonWrapper,
  PokemonModalContainer,
  PokemonModalOverlay,
  PokemonModalWrapper,
  PokemonSprite,
  PokemonSpriteContainer,
  PokemonStatisticsContainer,
} from './PokemonModalStyled'

export interface PokemonModalProps {
  closePokemonModal: Function;
  pokemonModalData: PokemonModalData;
}

export const PokemonModal = ({
  closePokemonModal,
  pokemonModalData
}: PokemonModalProps): JSX.Element => {
  const closeModal = () => {
    closePokemonModal(false)
  }

  useEffect(() => {
    console.log(pokemonModalData)
  })

  return (
    <PokemonModalContainer>
      <PokemonModalOverlay/>


      <PokemonModalWrapper>
        <CloseButtonContainer>
          <CloseButtonWrapper onClick={closeModal}>
            <IoIosCloseCircle/>
          </CloseButtonWrapper>
        </CloseButtonContainer>

        <PokemonSpriteContainer>
          <PokemonSprite src={pokemonModalData.sprites.front_default} />
        </PokemonSpriteContainer>

        <PokemonStatisticsContainer>
          
        </PokemonStatisticsContainer>


      </PokemonModalWrapper>
    </PokemonModalContainer>
  )
}

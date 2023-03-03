import styled from 'styled-components'

export const PokemonModalContainer = styled.div`
  width: 100%;
  height: 100%;
`

export const PokemonModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: 30%;
  background-color: #fbfbfb;

  border-radius: 15px;
`

export const PokemonModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(0, 0, 0, .7);
  z-index: 1000;
`

export const CloseButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;

  padding: 20px;
`

export const CloseButtonWrapper = styled.div`
  width: 45px;
  font-size: 35px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PokemonSpriteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PokemonSprite = styled.img`
  width: 50%;
  border-radius: 50%;
`

export const PokemonStatisticsContainer = styled.div`

`

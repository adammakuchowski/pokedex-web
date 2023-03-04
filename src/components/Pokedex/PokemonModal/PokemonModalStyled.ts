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
  min-width: 300px;
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

  position: relative;
  right: 10px;
  top: 10px;
`

export const CloseButtonWrapper = styled.div`
  width: 45px;
  font-size: 35px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.2s ease-in-out;

  :hover{
    transform: scale(1.1)
  }
`

export const PokemonSpriteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
`

export const PokemonName = styled.div`
  font-size: 25px;
  margin: 10px 0px;
`

export const PokemonSprite = styled.img`
  width: 50%;
  border-radius: 50%;

  background-color: #4444;
`

export const PokemonStatisticsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const PokemonTypeContainer = styled.div`
  background-color: #5555;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  gap: 30px;
  margin: 20px 0px;
`

export const PokemonStatisticsWrapper = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PokemonStatisticsBox = styled.div`
  background-color: #1235;
  min-width: 250px;
  border-radius: 10px;
  width: 80%;

  display: flex;
  flex-direction: column;
  padding: 10px;
`

import styled from 'styled-components'

export const PokemonCardContainer = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;

  width: 330px;
  min-width: 330px;
  height: 250px;
  margin: 20px;
  border-radius: 5% 15%;
  color: black;

  -webkit-box-shadow: 8px 8px 24px -5px rgba(66, 68, 90, 1);
  -moz-box-shadow: 8px 8px 24px -5px rgba(66, 68, 90, 1);
  box-shadow: 8px 8px 24px -5px rgba(66, 68, 90, 1);
`

export const PokemonCardHeader = styled.div`
  height: 25%;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
`

export const PokemonName = styled.div`
  grid-column: 2/3;
  align-self: end;
  justify-self: center;

  font-size: 25px;
`

export const PokemonIndex = styled.div`
  align-self: center;
  justify-self: end;

  position: relative;
  right: 25px;

  font-size: 25px;
`

export const PokemonCardBody = styled.div`
  height: 75%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 50px;
`

export const PokemonSprite = styled.img`
  background-color: #4444;
  border-radius: 50%;
  width: 40%;

  cursor: pointer;

  transition: all 0.2s ease-in-out;

  :hover{
    transform: scale(1.1)
  }

`

export const PokemonInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #4444;

  border-radius: 20%;
  padding: 20px;
`

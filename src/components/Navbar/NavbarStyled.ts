import styled from 'styled-components'

export const NavbarContainer = styled.div`
  width: 100%;
  background-color: #FF5858;
  height: 110px;

  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 1fr));
`

export const LogoContainer = styled.div`
  justify-self: start;
  margin: 0 30px;
  max-width: 250px;
  align-self: center;
  min-width: 200px;
`

export const Logo = styled.img`
  height: 80%;
  width: 100%;
`

export const ThemeContainer = styled.div`
  grid-column: 3;
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 0 60px;
`

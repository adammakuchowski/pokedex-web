import {useContext} from 'react'
import {CgSun, CgMoon} from 'react-icons/cg'
import Switch from '@mui/material/Switch'
import {Logo, LogoContainer, NavbarContainer, ThemeContainer} from './NavbarStyled'
import logo from '../../assets/navbar/logo.png'
import ThemeContext from '../../context/themeContext'

interface NavbarProps {
  setCurrentPageUrl: Function,
  defaultPokemonDataUrl: string,
}

export const Navbar = ({
  setCurrentPageUrl,
  defaultPokemonDataUrl,
}: NavbarProps): JSX.Element => {
  const {switchThemeColor, themeColor} = useContext(ThemeContext)
  const {backgroundColor, theme} = themeColor

  const handleChange = () => {
    switchThemeColor()
  }

  const setDefaultPokemonUrl = () => {
    setCurrentPageUrl(defaultPokemonDataUrl)
  }

  return (
    <NavbarContainer style={{backgroundColor: backgroundColor}}>
      <LogoContainer onClick={setDefaultPokemonUrl}>
        <Logo src={logo}></Logo>
      </LogoContainer>
      <ThemeContainer>
        <CgSun style={{color: theme ? 'white' : ''}} />
        <Switch
          checked={!theme}
          onChange={handleChange}
          inputProps={{'aria-label': 'controlled'}}
          color='default'
        />
        <CgMoon style={{color: theme ? '' : 'white'}} />
      </ThemeContainer>
    </NavbarContainer>
  )
}

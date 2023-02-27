import {useContext} from 'react'
import { CgSun, CgMoon } from 'react-icons/cg'
import Switch from '@mui/material/Switch'
import {Logo, LogoContainer, NavbarContainer, ThemeContainer} from './NavbarStyled'
import logo from '../../assets/navbar/logo.png'
import ThemeContext from '../../context/themeContext'

export const Navbar = () => {
  const {switchThemeColor, themeColor} = useContext(ThemeContext)
  const {navbarColor, theme} = themeColor

  const handleChange = () => {
    switchThemeColor()
  }

  return (
    <NavbarContainer style={{backgroundColor: navbarColor}}>
      <LogoContainer>
        <Logo src={logo}></Logo>
      </LogoContainer>

      <ThemeContainer>
        <CgSun style={{color: theme ? 'white' : ''}}/>
        <Switch
          checked={!theme}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled'}}
          color='default'
        />
        <CgMoon style={{color: theme ? '' : 'white'}}/>
      </ThemeContainer>
    </NavbarContainer>
  )
}

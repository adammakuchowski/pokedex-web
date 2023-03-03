import React from 'react'

export type ThemeContextType = {
  themeColor: {
    theme: boolean,
    backgroundColor: string,
    pokedexBackgroundColor: string
  };
  switchThemeColor: () => void;
}

const ThemeContext = React.createContext<ThemeContextType>({
  themeColor: {
    theme: true,
    backgroundColor: '#FF5858',
    pokedexBackgroundColor: '#fbfbfb'
  },
  switchThemeColor: () => {}
})

export default ThemeContext

import React from 'react'

export type ThemeContextType = {
  themeColor: {
    theme: boolean,
    navbarColor: string,
    backgroundColor: string
  };
  switchThemeColor: () => void;
}

const ThemeContext = React.createContext<ThemeContextType>({
  themeColor: {
    theme: true,
    navbarColor: '#FF5858',
    backgroundColor: '#fbfbfb'
  },
  switchThemeColor: () => {}
})

export default ThemeContext

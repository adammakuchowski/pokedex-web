import React, {useEffect, useState} from 'react'
import axios, {Canceler} from 'axios'
import {Pokedex} from './components/Pokedex/Pokedex'
import {Pagination} from './components/Pagination/Pagination'
import {PokemonData, ThemeColor} from './types/types'
import {Navbar} from './components/Navbar/Navbar'
import ThemeContext from './context/themeContext'
import {LoadingSpinner} from './components/UI/LoadingSpinner/LoadingSpinner'

function App(): JSX.Element {
  const [pokemonData, setPokemonData] = useState<PokemonData>()

  const [currentPageUrl, setCurrentPageUrl] = useState<string>('https://pokeapi.co/api/v2/pokemon')
  const [nextPageUrl, setNextPageUrl] = useState<string>()
  const [previousPageUrl, setPreviousPageUrl] = useState<string>()

  const [loadingData, setLoadingData] = useState<boolean>(true)

  const [themeColor, setThemeColor] = useState<ThemeColor>({
      theme: true,
      navbarColor: '#FF5858',
      backgroundColor: '#fbfbfb'
  })

  const getPokemonData = async (): Promise<Function> => {
    setLoadingData(true)
    let cancel: Canceler

    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setPokemonData(res.data)
      setNextPageUrl(res.data.next)
      setPreviousPageUrl(res.data.previous)

      setLoadingData(false)
    })

    return () => cancel()
  }

  useEffect(() => {
    getPokemonData()
  }, [currentPageUrl])

  const gotoNextPage = () => {
    if (!nextPageUrl) return

    setCurrentPageUrl(nextPageUrl)
  }

  const gotoPreviousPage = () => {
    if (!previousPageUrl) return

    setCurrentPageUrl(previousPageUrl)
  }

  const switchThemeColor = () => {
    const {theme} = themeColor

    return theme ? 
      setThemeColor({
        theme: false,
        navbarColor: '#202020',
        backgroundColor: '#191919'
      }) :
      setThemeColor({
        theme: true,
        navbarColor: '#FF5858',
        backgroundColor: '#fbfbfb'
      }) 
  }

  if (loadingData || !pokemonData) {
    return <LoadingSpinner/>
  }
  
  return (
    <>
      <ThemeContext.Provider value={{
          themeColor: themeColor,
          switchThemeColor,
        }}>
          <Navbar/>
          <Pokedex pokemons={pokemonData} />
          <Pagination
            gotoNextPage={nextPageUrl ? gotoNextPage : null}
            gotoPreviousPage={previousPageUrl ? gotoPreviousPage : null}
          />
      </ThemeContext.Provider>
    </>
  )
}

export default App;

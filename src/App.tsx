import React, {useEffect, useState} from 'react'
import axios, {Canceler} from 'axios'
import {Pokedex} from './components/Pokedex/Pokedex'
import {Pagination} from './components/Pagination/Pagination'
import {PokemonData, ThemeColor} from './types/types'
import {Navbar} from './components/Navbar/Navbar'
import ThemeContext from './context/themeContext'
import {LoadingSpinner} from './components/UI/LoadingSpinner/LoadingSpinner'

const DEFAULT_POKEMON_DATA_URL = 'https://pokeapi.co/api/v2/pokemon'

function App(): JSX.Element {
  const [pokemonData, setPokemonData] = useState<PokemonData>()

  const [currentPageUrl, setCurrentPageUrl] = useState<string>(DEFAULT_POKEMON_DATA_URL)
  const [nextPageUrl, setNextPageUrl] = useState<string>()
  const [previousPageUrl, setPreviousPageUrl] = useState<string>()

  const [loadingData, setLoadingData] = useState<boolean>(true)

  const [themeColor, setThemeColor] = useState<ThemeColor>({
      theme: true,
      backgroundColor: '#FF5858',
      pokedexBackgroundColor: '#fbfbfb'
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
    }).catch(err => {
      console.error('Problem while fetching pokedex data: ', err)
    }).finally(() => {
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
        backgroundColor: '#202020',
        pokedexBackgroundColor: '#191919'
      }) :
      setThemeColor({
        theme: true,
        backgroundColor: '#FF5858',
        pokedexBackgroundColor: '#fbfbfb'
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
          <Navbar setCurrentPageUrl={setCurrentPageUrl} defaultPokemonDataUrl={DEFAULT_POKEMON_DATA_URL}/>
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

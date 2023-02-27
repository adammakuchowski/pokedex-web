import {useContext} from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import ThemeContext from '../../context/themeContext'
import {ArrowContainer, PaginationContainer} from './PaginationStyled'
import {PaginationProps} from './types'

export const Pagination = ({
  gotoNextPage,
  gotoPreviousPage
}: PaginationProps): JSX.Element => {
  const {themeColor} = useContext(ThemeContext)
  const {navbarColor, theme} = themeColor

  return (
    <PaginationContainer style={{backgroundColor: navbarColor}}>
      {gotoPreviousPage && (
        <ArrowContainer 
          onClick={() => gotoPreviousPage()}>
            <AiOutlineArrowLeft style={{color: 'white'}}/>
        </ArrowContainer>
      )}

      {gotoNextPage && (
        <ArrowContainer 
          onClick={() => gotoNextPage()}>
            <AiOutlineArrowRight style={{color: 'white'}}/>
        </ArrowContainer>
      )}
    </PaginationContainer>
  )
}

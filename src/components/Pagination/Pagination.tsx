import {useContext} from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import ThemeContext from '../../context/themeContext'
import {ArrowContainer, PaginationContainer} from './PaginationStyled'

interface PaginationProps {
  gotoNextPage: Function | null,
  gotoPreviousPage: Function | null,
}

export const Pagination = ({
  gotoNextPage,
  gotoPreviousPage
}: PaginationProps): JSX.Element => {
  const {themeColor} = useContext(ThemeContext)
  const {backgroundColor, theme} = themeColor

  return (
    <PaginationContainer style={{backgroundColor: backgroundColor}}>
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

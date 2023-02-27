import styled from 'styled-components'

export const PaginationContainer = styled.div`
  height: 100px;
  width: 100%;
  gap: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
`
export const ArrowContainer = styled.div`
  font-size: 30px;
  border-radius: 50%;
  padding: 15px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover{
    transform: scale(1.1)
  }
`

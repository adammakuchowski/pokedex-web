import styled from 'styled-components'
import CircularProgress from '@mui/material/CircularProgress'

const SpinnerContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoadingSpinner = () => (
  <SpinnerContainer>
    <CircularProgress color='error'/>
  </SpinnerContainer>
)

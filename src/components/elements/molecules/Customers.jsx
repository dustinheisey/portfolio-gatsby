import React from 'react'
import styled from 'styled-components'
import Grid from '../atoms/Grid'

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--sm);
`

const StyledGrid = styled(Grid)`
  width: 100%;
`

export default ({ customers, tagline, children }) => (
  <StyledContainer>
    <caption>{tagline}</caption>
    <StyledGrid columns={customers}>{children}</StyledGrid>
  </StyledContainer>
)

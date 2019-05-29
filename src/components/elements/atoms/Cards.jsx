import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.section`
  box-shadow: var(--shadow-hover);
  border-radius: 5px;
  margin: var(--md);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const StyledText = styled.div`
  padding: var(--md);
`

export default ({ children }) => (
  <StyledCard>
    <StyledText>{children}</StyledText>
  </StyledCard>
)

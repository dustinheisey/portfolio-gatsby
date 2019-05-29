import React from 'react'
import styled from 'styled-components'

const StyledGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(
    ${props => props.columns},
    1fr
  );
  grid-gap: var(--md);
`

export default ({ columns, children }) => (
  <StyledGrid columns={columns}>{children}</StyledGrid>
)

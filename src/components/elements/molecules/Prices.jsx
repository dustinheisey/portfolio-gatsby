import React from 'react'
import styled from 'styled-components'

const StyledHeading = styled.h3``
const StyledPrice = styled.span`
  display: inline;
  font-weight: bold;
  color: var(--secondary-darker);
  font-size: 150%;
`
const StyledFrequency = styled.span`
  display: inline;
  color: var(--secondary);
  font-size: 75%;
  margin-left: var(--xs);
`
export default ({ price, frequency }) => (
  <StyledHeading>
    <StyledPrice>{price}</StyledPrice>
    <StyledFrequency>{frequency}</StyledFrequency>
  </StyledHeading>
)

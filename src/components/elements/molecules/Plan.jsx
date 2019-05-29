import React from 'react'
import styled from 'styled-components'
import Prices from './Prices'
import Btn from '../atoms/Btn'

const StyledContainer = styled.div`
  padding: var(--md);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid var(--secondary-light);
  margin: var(--md);
`
const StyledPrices = styled(Prices)`
  padding-bottom: var(--md);
`
const StyledCaption = styled.caption`
  align-self: flex-end;
  margin: var(--sm) var(--sm) var(--xl) 0;
`

export default ({
  caption,
  price,
  frequency,
  children,
  btnLink,
  btnText
}) => (
  <StyledContainer>
    <StyledCaption>{caption}</StyledCaption>
    <StyledPrices price={price} frequency={frequency} />
    {children}
    <Btn link={btnLink} content={btnText} />
  </StyledContainer>
)

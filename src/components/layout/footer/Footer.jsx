/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-lone-blocks */
import {
  React,
  styled,
  media,
  Copywrite,
  Input,
  Btn,
  Link
} from '../../../../config/imports'

import Form from './Form'
import List from './List'

const StyledFooter = styled.footer`
  ${media.down('phone')``}
`
const StyledContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--xl) var(--xxl);
  background: var(--secondary-lighter);

  ${media.down('phone')`
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`
const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #fff;
  justify-content: center;
  & img {
    width: 15vmin;
  }

  ${media.down('phone')`margin-bottom: var(--xxl)`}
`
const StyledInputList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;

  & * {
    margin-right: var(--sm);
  }
`
const StyledList = styled.ul`
  list-style: none;
  display: grid;
  grid-gap: var(--sm) var(--lg);
  grid-template-columns: repeat(2, 1fr);
  margin: 0;

  ${media.down(
    'phone'
  )`justify-items: start; text-align: start;`}
`
export default () => (
  <StyledFooter>
    <StyledContainer>
      <Form />
      <List />
    </StyledContainer>
    <Copywrite />
  </StyledFooter>
)

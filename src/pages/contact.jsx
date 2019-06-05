/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  React,
  styled,
  Bare,
  Section,
  Btn,
  Link,
  Grid
} from '../../config/imports'

import Contact from '../components/modules/contact/Grid'

const StyledContainer = styled.div`
  width: 100%;

  & * {
    width: 100%;
  }
`

const StyledForm = styled.form`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

const Content = {
  title: 'Contact | Dustin Heisey',
  description:
    'Interested in learning more about how I can help? Check out how now!'
}

export default () => (
  <Bare
    title={Content.title}
    description={Content.description}
    contact
  >
    <Contact />
  </Bare>
)

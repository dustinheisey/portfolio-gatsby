import {
  React,
  styled,
  Section,
  Btn,
  Link,
  Grid
} from '../../../../config/imports'

import Form from './Form'

import Contact from '../../../media/svg/inline/contact.svg'

const StyledContainer = styled.div`
  width: 100%;

  & * {
    width: 100%;
  }
`

export default () => (
  <Section xl>
    <Grid columns={2}>
      <Contact style={{ margin: 'auto' }} />
      <Form />
    </Grid>
  </Section>
)

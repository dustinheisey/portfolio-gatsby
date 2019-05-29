import {
  React,
  Section,
  Grid
} from '../../../../config/imports'

import Contact from '../../../media/svg/inline/contact.svg'

import Form from './Form'

export default () => (
  <Section xl>
    <Grid columns={2}>
      <Contact style={{ margin: 'auto' }} />
      <Form />
    </Grid>
  </Section>
)

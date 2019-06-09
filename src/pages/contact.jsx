import { React, Bare } from '../../config/imports'

import Grid from '../components/modules/contact/Grid'

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
    <Grid />
  </Bare>
)

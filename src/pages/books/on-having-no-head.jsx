import { React, Bare } from '../../../config/imports'

import Grid from '../../components/modules/books/no-head/Grid'

const Content = {
  title: 'On Having No Head | Dustin Heisey',
  description:
    'D.E. Harding has a profound insight that on the surface seems completely absurd: He has no head, and neither do any of us. He explores why he thinks so and the implications it has.'
}

export default () => (
  <Bare
    title={Content.title}
    description={Content.description}
  >
    <Grid />
  </Bare>
)

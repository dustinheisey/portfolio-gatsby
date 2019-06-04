import { React, Bare } from '../../../config/imports'

import Grid from '../../components/modules/books/digital-minimalism/Grid'

const Content = {
  title: 'Digital Minimalism | Dustin Heisey',
  description:
    'The concept of minimalism is one I was first introduced to with a Netflix documentary by the same name, however Digital Minimalism and the insights it has brought to me have affected me far more than minimizing the physical objects in my life ever could have.'
}

export default () => (
  <Bare
    title={Content.title}
    description={Content.description}
  >
    <Grid />
  </Bare>
)

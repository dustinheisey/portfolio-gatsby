import { React, Bare } from '../../../config/imports'

import Grid from '../../components/modules/books/sapiens/Grid'

const Content = {
  title: 'Sapiens | Dustin Heisey',
  description:
    'If I had to pick one book that has had the most impact on my perception of myself and of everyone else, it would be Sapiens.'
}

export default () => (
  <Bare
    title={Content.title}
    description={Content.description}
  >
    <Grid />
  </Bare>
)

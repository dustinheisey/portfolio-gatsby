import { React, Bare } from '../../../config/imports'

import Grid from '../../components/modules/books/buddhism/Grid'

const Content = {
  title:
    'Summary & Thoughts on "Why Buddhism is True" | Dustin Heisey',
  description:
    'My introduction to buddhist philosophy, Why Buddhism is True explains how buddhism is a logically valid ideology through use of Science and Philosophy.'
}

export default () => (
  <Bare
    title={Content.title}
    description={Content.description}
  >
    <Grid />
  </Bare>
)

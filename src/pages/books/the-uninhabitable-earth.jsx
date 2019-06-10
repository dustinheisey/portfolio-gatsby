import { React, Bare } from '../../../config/imports'

import Grid from '../../components/modules/books/earth/Grid'

const Content = {
  title:
    'Summary & Thoughts on "The Uninhabitable Earth" | Dustin Heisey',
  description:
    'By now the concept of climate change is one that most accept, however some still fail to aknowledge its reality, and most fail to grasp the extend to which it will affect our lives in the near future. The Uninhabitable Earth will help you understand and is essential to read if you are alive right now.'
}

export default () => (
  <Bare
    title={Content.title}
    description={Content.description}
  >
    <Grid />
  </Bare>
)

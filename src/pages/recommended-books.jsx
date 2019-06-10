import { React, Bare } from '../../config/imports'

import Cover from '../components/modules/books/Cover'
import Grid from '../components/modules/books/Grid'

const Content = {
  title:
    'Personal Insights on My Favorite Books | Dustin Heisey',
  description:
    'Some books have stood out to me for having changed my perspectives on life and work. This is a place for me to keep track and share these important books with you all.'
}
export default () => (
  <Bare
    title={Content.title}
    description={Content.description}
  >
    <Cover />
    <Grid />
  </Bare>
)

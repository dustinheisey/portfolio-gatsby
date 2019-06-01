import { React, Bare, SEO } from '../../config/imports'

import Cover from '../components/modules/books/Cover'
import Grid from '../components/modules/books/Grid'

export default () => (
  <Bare>
    <SEO
      title='Recommended Books | Dustin Heisey'
      description='Some books have stood out to me for having changed
      my perspectives on life and work. This is a place
      for me to keep track and share these important books
      with you all. I hope you
      can find your next book here.'
    />
    <Cover />
    <Grid />
  </Bare>
)

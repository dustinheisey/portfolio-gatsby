import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { React, Bare, SEO } from '../../../config/imports'

import Grid from '../../components/modules/books/atomic-habits/Grid'

export default () => (
  <Bare>
    <SEO
      title='Atomic Habits | Dustin Heisey'
      description='Placeholder'
    />
    <Grid />
  </Bare>
)

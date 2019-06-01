import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { React, Bare, SEO } from '../../../config/imports'

import Grid from '../../components/modules/books/atomic-habits/Grid'

export default () => (
  <Bare>
    <SEO
      title='Atomic Habits | Dustin Heisey'
      description='I have always thought that habits were the key to massive improvements in my life, and Atomic Habits has given me a clear guide on exactly how to develop them.'
    />
    <Grid />
  </Bare>
)

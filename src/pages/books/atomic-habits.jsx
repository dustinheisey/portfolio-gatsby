import { React, Bare } from '../../../config/imports'

import Grid from '../../components/modules/books/atomic-habits/Grid'

const Content = {
  title:
    'Summary & Thoughts on "Atomic Habits" | Dustin Heisey',
  description:
    'I have always thought that habits were the key to massive improvements in my life, and Atomic Habits has given me a clear guide on exactly how to develop them.'
}

export default () => (
  <Bare
    title={Content.title}
    description={Content.description}
  >
    <Grid />
  </Bare>
)

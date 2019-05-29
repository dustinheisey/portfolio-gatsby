import { React, Bare, SEO } from '../../config/imports'

import Cover from '../components/modules/portfolio/Cover'
import Aerials from '../components/modules/portfolio/Aerials'
import Honey from '../components/modules/portfolio/Honey'

export default () => (
  <Bare>
    <SEO
      title='Portfolio | Dustin Heisey'
      description='Placeholder'
    />
    <Cover />
    <Honey />
    <Aerials />
  </Bare>
)

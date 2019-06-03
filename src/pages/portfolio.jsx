import { React, Bare, SEO } from '../../config/imports'

import Cover from '../components/modules/portfolio/Cover'
import Aerials from '../components/modules/portfolio/Aerials'
import Honey from '../components/modules/portfolio/Honey'

export default () => (
  <Bare
    title='Portfolio | Dustin Heisey'
    description='Welcome to my portfolio. Check out some of my recent
  work and maybe gather some inspiration for your next
  project.'
  >
    <Cover />
    <Honey />
    <Aerials />
  </Bare>
)

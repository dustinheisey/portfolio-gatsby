import { React, Bare } from '../../config/imports'

import Cover from '../components/modules/portfolio/Cover'
import Aerials from '../components/modules/portfolio/Aerials'
import Honey from '../components/modules/portfolio/Honey'

const Content = {
  title:
    'How I&apos;ve Helped Some Local Businesses Recently | Dustin Heisey',
  description:
    'Welcome to my portfolio. Check out some of my recent work and maybe gather some inspiration for your next project.'
}

export default () => (
  <Bare
    title={Content.title}
    description={Content.description}
  >
    <Cover />
    <Honey />
    <Aerials />
  </Bare>
)

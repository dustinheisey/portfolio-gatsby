import {
  React,
  Bare,
  Section,
  Btn,
  SEO
} from '../../config/imports'

import Cover from '../components/modules/portfolio/Cover'
import Aerials from '../components/modules/portfolio/Aerials'
import Honey from '../components/modules/portfolio/Honey'

export default () => (
  <Bare
    title='Success | Dustin Heisey'
    description='I got your submission and will respond ASAP! Thanks!'
  >
    <Section xxl>
      <caption>Thanks!</caption>
      <h1>Success</h1>
      <p>I got your submission and will respond ASAP!</p>
      <Btn primary link='/' content='Back Home' />
    </Section>
  </Bare>
)

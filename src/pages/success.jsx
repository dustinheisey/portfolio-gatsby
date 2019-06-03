import {
  React,
  Bare,
  Section,
  Btn,
  SEO
} from '../../config/imports'

import Cover from '../components/modules/portfolio/Cover'

export default () => (
  <Bare
    title='Success | Dustin Heisey'
    description='I got your submission and will respond ASAP! Thanks!'
  >
    <Section xxl>
      <aside>Thanks!</aside>
      <h1>Success</h1>
      <p>I got your submission and will respond ASAP!</p>
      <Btn primary link='/' content='Back Home' />
    </Section>
  </Bare>
)

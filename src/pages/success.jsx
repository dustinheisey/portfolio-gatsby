import {
  React,
  Bare,
  Section,
  Btn
} from '../../config/imports'

import Cover from '../components/modules/portfolio/Cover'

const Content = {
  title: 'Success | Dustin Heisey',
  description:
    'I got your submission and will respond ASAP! Thanks!'
}
export default () => (
  <Bare
    title={Content.title}
    description={Content.description}
  >
    <Section xxl>
      <aside>Thanks!</aside>
      <h1>Success</h1>
      <p>I got your submission and will respond ASAP!</p>
      <Btn primary link='/' content='Back Home' />
    </Section>
  </Bare>
)

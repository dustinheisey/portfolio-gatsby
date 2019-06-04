import {
  React,
  Bare,
  Section,
  Btn
} from '../../config/imports'

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
      <h4>Thanks!</h4>
      <h1>Success</h1>
      <p>I got your submission and will respond ASAP!</p>
      <Btn primary link='/' content='Back Home' />
    </Section>
  </Bare>
)

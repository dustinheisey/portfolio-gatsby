import {
  React,
  Cover,
  Btn,
  SEO
} from '../../config/imports'

import Grid from '../components/modules/process/Grid'

const Content = {
  heading: 'My Carefully Considered Process.',
  text:
    'A website is a work of art, but also a feat of careful design. I use a specific process to ensure that quality is met with no exceptions, and that it can be met in the most efficient and effective way possible.',
  btn: (
    <Btn
      text
      light
      content='See My Process'
      link='/process#process'
    />
  ),
  index: 2
}

export default () => (
  <Cover
    img={Content.index}
    heading={Content.heading}
    text={Content.text}
    btn={Content.btn}
  >
    <SEO
      title='My Process | Dustin Heisey'
      description='A website is a work of art, but also a feat of careful design. I use a specific process to ensure that quality is met with no exceptions, and that it can be met in the most efficient and effective way possible.'
    />
    <Grid />
  </Cover>
)

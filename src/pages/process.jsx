import { React, Cover, Btn } from '../../config/imports'

import Grid from '../components/modules/process/Grid'

const Content = {
  title:
    'My Carefully Considered Design Process | Dustin Heisey',
  description:
    'A website is a work of art, but also a feat of careful design. I use a specific process to ensure that quality is met with no exceptions, and that it can be met in the most efficient and effective way possible.',
  heading: 'My Carefully Considered Design Process.',
  text:
    'A website is a work of art, but also a feat of careful design. I use a specific process to ensure that quality is met with no exceptions, and that it can be met in the most efficient and effective way possible.',
  btn: (
    <Btn
      primary
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
    title={Content.title}
    description={Content.description}
  >
    <Grid />
  </Cover>
)

import {
  React,
  Cover,
  Btn,
  SEO
} from '../../config/imports'

import Grid from '../components/modules/process/Grid'
import Tables from '../media/images/tables.jpg'

export default () => (
  <Cover
    img={Tables}
    gradient='linear-gradient(
      to right bottom,
      rgba(50, 50, 50, 0.30),
      rgba(100, 100, 100, 0.30)
    )'
    heading='My Carefully Considered Process.'
    text='A website is a work of art, but also a feat of
    careful design. I use a specific process to ensure
    that quality is met with no exceptions, and that it
    can be met in the most efficient and effective way
    possible.'
    light
    btn={
      <Btn
        text
        light
        content='See My Process'
        link='/process#process'
      />
    }
  >
    <SEO
      title='My Process | Dustin Heisey'
      description='Placeholder'
    />
    <Grid />
  </Cover>
)

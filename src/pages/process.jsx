/* eslint-disable react/jsx-wrap-multilines */
import {
  React,
  Cover,
  Btn,
  SEO
} from '../../config/imports'

// import Business from '../components/modules/process/1'
// import User from '../components/modules/process/2'
// import Structure from '../components/modules/process/3'
// import Inspiration from '../components/modules/process/4'
// import Wireframe from '../components/modules/process/5'
// import Design from '../components/modules/process/6'
// import Development from '../components/modules/process/7'
// import PWA from '../components/modules/process/8'
// import Optimize from '../components/modules/process/9'
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
    {/* <Business />
    <User />
    <Structure />
    <Inspiration />
    <Wireframe />
    <Design />
    <Development />
    <PWA />
    <Optimize /> */}
    <Grid />
  </Cover>
)

import {
  React,
  Cover,
  Btn,
  SEO
} from '../../config/imports'

import Intro from '../components/modules/index/Intro'
import Services from '../components/modules/index/Services'
import Project from '../components/modules/index/Project'

import Cafe from '../media/images/cafe.jpg'

export default () => (
  <Cover
    gradient='linear-gradient(
    to right bottom,
    rgba(50, 50, 50, 0.35),
    rgba(100, 100, 100, 0.35)
  )'
    img={Cafe}
    heading='Powerful Web Apps for Businesses and Their
  Customers.'
    text=' I make digital experiences that your users will
  love and give you an impressive online presence.'
    btn={
      <Btn primary link='/about' content='Learn about me' />
    }
    light
  >
    <SEO
      title='Dustin Heisey | Portfolio'
      description='Placeholder'
    />
    <Intro />
    <Services />
    <Project />
  </Cover>
)

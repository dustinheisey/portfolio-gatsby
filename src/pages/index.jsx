import {
  React,
  Cover,
  Btn,
  SEO
} from '../../config/imports'

import Intro from '../components/modules/index/Intro'
import Services from '../components/modules/index/Services'
import Project from '../components/modules/index/Project'

const Content = {
  heading:
    'Powerful Web Apps for Businesses and Their Customers.',
  text:
    'I make digital experiences that your users will love and give you an impressive online presence.',
  index: 0,
  btn: (
    <Btn primary link='/about' content='Learn About Me' />
  )
}

export default () => (
  <Cover
    img={Content.index}
    heading={Content.heading}
    text={Content.text}
    btn={Content.btn}
    title='Dustin Heisey | Portfolio'
    description='I make digital experiences that your users will love and give you an impressive online presence.'
  >
    <Intro />
    <Services />
    <Project />
  </Cover>
)

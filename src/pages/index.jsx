import { React, Btn, SEO } from '../../config/imports'

import Test from '../components/layout/layouts/Cover'

import Intro from '../components/modules/index/Intro'
import Services from '../components/modules/index/Services'
import Project from '../components/modules/index/Project'

const Cover = {
  heading:
    'Powerful Web Apps for Businesses and Their Customers.',
  text:
    'I make digital experiences that your users will love and give you an impressive online presence.',
  index: 0
}

export default () => (
  <Test
    img={Cover.index}
    heading={Cover.heading}
    text={Cover.text}
  >
    <SEO title='Dustin Heisey | Portfolio' description='' />
    <Intro />
    <Services />
    <Project />
  </Test>
)

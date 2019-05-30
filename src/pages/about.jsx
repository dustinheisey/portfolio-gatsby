import { React, Cover, SEO } from '../../config/imports'

import Testimonials from '../components/modules/about/Testimonials'
import Values from '../components/modules/about/Values'

import Forest from '../media/images/forest.jpg'

export default () => (
  <Cover
    img={Forest}
    gradient='linear-gradient(
      to right bottom,
      rgba(50, 50, 50, 0.30),
      rgba(100, 100, 100, 0.30)
    )'
    heading='I Design Websites for Business Owners and Their
    Customers.'
    text='My name is Dustin Heisey, and I am located in
    Portland, Oregon. I help businesses develop an
    online presence that resonates with people and helps
    you help them in the way only you know how to.'
    light
  >
    <SEO
      title='About Me | Dustin Heisey'
      description=''
    />
    <Values />
    <Testimonials />
  </Cover>
)

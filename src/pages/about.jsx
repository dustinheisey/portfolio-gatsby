import {
  React,
  Cover,
  Btn,
  SEO
} from '../../config/imports'

import Testimonials from '../components/modules/about/Testimonials'
import Values from '../components/modules/about/Values'

const Content = {
  heading:
    'I Design Websites for Business Owners and Their Customers.',
  text:
    'My name is Dustin Heisey, and I am located in Portland, Oregon. I help businesses develop an online presence that resonates with people and helps you help them in the way only you know how to.',
  index: 1
}

export default () => (
  <Cover
    img={Content.index}
    heading={Content.heading}
    text={Content.text}
  >
    <SEO title='About Me | Dustin Heisey' description='' />
    <Values />
    <Testimonials />
  </Cover>
)

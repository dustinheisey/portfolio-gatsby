import { React, Cover } from '../../config/imports'

import Testimonials from '../components/modules/about/Testimonials'
import Values from '../components/modules/about/Values'

const Content = {
  title: 'About Me | Dustin Heisey',
  description:
    'My name is Dustin Heisey, and I am located in Portland, Oregon. I help businesses develop an online presence that resonates with people and helps you help them in the way only you know how to.',
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
    title={Content.title}
    description={Content.description}
  >
    <Values />
    <Testimonials />
  </Cover>
)

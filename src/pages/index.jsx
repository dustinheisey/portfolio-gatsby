/* eslint-disable no-undef */
import { React, Cover, Btn } from '../../config/imports'

import Intro from '../components/modules/index/Intro'
import Services from '../components/modules/index/Services'
import Project from '../components/modules/index/Project'

const Content = {
  title:
    'Portland Web Design & Progressive Web Apps | Dustin Heisey',
  description:
    'I make digital experiences that your users will love and give you an impressive online presence.',
  heading:
    'Powerful Web Apps for Businesses and Their Customers.',
  text:
    'I make digital experiences that your users will love and give you an impressive online presence.',
  index: 0,
  btn: (
    <Btn primary link='/about' content='Learn About Me' />
  )
}

export default () => {
  setTimeout(() => {
    _gs('track')
  }, 1000)
  return (
    <Cover
      img={Content.index}
      heading={Content.heading}
      text={Content.text}
      btn={Content.btn}
      title={Content.title}
      description={Content.description}
      index
    >
      <Intro />
      <Services />
      <Project />
    </Cover>
  )
}

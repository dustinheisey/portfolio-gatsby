import { React, Cover, SEO } from '../../config/imports'

import Info from '../components/modules/web-design/Info'
import Results from '../components/modules/web-design/Results'

import Market from '../media/images/mountain.jpg'

export default () => (
  <Cover
    img={Market}
    gradient='linear-gradient(
  to right bottom,
  rgba(50, 50, 50, 0.35),
  rgba(100, 100, 100, 0.35)
)'
    heading='Speedy, Intuitive, Reliable, Custom Web Design.'
    text='I create a beautiful experience for your users, showcasing your business in the best light possible, without compromising on speed or reliability.'
    light
  >
    <SEO
      title='Custom Web Design | Dustin Heisey'
      description='Placeholder'
    />
    <Info />
    <Results />
  </Cover>
)

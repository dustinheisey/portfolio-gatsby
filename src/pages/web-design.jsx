import { React, Cover, SEO } from '../../config/imports'

import Info from '../components/modules/design/Info'
import Results from '../components/modules/design/Results'

const Content = {
  heading:
    'Speedy, Intuitive, Reliable, Custom Web Design.',
  text:
    'I create a beautiful experience for your users, showcasing your business in the best light possible, without compromising on speed or reliability.',
  index: 4
}

export default () => (
  <Cover
    heading={Content.heading}
    text={Content.text}
    img={Content.index}
    title='Custom Web Design | Dustin Heisey'
    description='I create a beautiful experience for your users, showcasing your business in the best light possible, without compromising on speed or reliability.'
  >
    <Info />
    <Results />
  </Cover>
)

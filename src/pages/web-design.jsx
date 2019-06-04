import { React, Cover } from '../../config/imports'

import Info from '../components/modules/design/Info'
import Results from '../components/modules/design/Results'

const Content = {
  title: 'Custom Web Design | Dustin Heisey',
  description:
    'I create a beautiful experience for your users, showcasing your business in the best light possible, without compromising on speed or reliability.',
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
    title={Content.title}
    description={Content.description}
  >
    <Info />
    <Results />
  </Cover>
)

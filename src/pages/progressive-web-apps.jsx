import { React, Cover, SEO } from '../../config/imports'

import Grid from '../components/modules/pwa/Grid'

const Content = {
  heading: 'What is a Progressive Web App?',
  text:
    'The Progressive Web App specification is a standard for websites using key technologies to make a website function almost exactly like a native application on phones and tablets.',
  index: 5
}

export default () => (
  <Cover
    heading={Content.heading}
    text={Content.text}
    img={Content.index}
  >
    <SEO
      title='Progressive Web Apps | Dustin Heisey'
      description=''
    />
    <Grid />
  </Cover>
)

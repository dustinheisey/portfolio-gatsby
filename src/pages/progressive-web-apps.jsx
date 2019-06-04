import { React, Cover } from '../../config/imports'

import Grid from '../components/modules/pwa/Grid'

const Content = {
  title: 'Progressive Web Apps | Dustin Heisey',
  description:
    'The Progressive Web App specification is a standard for websites using key technologies to make a website function almost exactly like a native application on phones and tablets.',
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
    title={Content.title}
    description={Content.description}
  >
    <Grid />
  </Cover>
)

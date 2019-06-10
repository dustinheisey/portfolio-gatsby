import { React, Cover } from '../../config/imports'

import Grid from '../components/modules/pwa/Grid'

const Content = {
  title:
    'Progressive Web Apps for Portland Businesses | Dustin Heisey',
  description:
    'Progressive Web Apps function almost exactly like a native application on phones and tablets. Native Mobile UIs, Offline Support, Notifications, and App Icons, all to put your business ahead of the competition.',
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

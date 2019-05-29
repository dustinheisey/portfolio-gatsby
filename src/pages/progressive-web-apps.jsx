import { React, Cover, SEO } from '../../config/imports'

import Grid from '../components/modules/pwa/Grid'
import Hearts from '../media/images/hearts.jpg'

export default () => (
  <Cover
    img={Hearts}
    gradient='linear-gradient(
    to right bottom,
    rgba(50, 50, 50, 0.30),
    rgba(100, 100, 100, 0.30)
  )'
    heading='What is a Progressive Web App?'
    text='The Progressive Web App specification is a standard for websites
    using key technologies to make a website
    function almost exactly like a native application on
    phones and tablets.'
    light
  >
    <SEO
      title='Progressive Web Apps | Dustin Heisey'
      description='Placeholder'
    />
    <Grid />
  </Cover>
)

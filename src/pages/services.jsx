import { React, Cover, SEO } from '../../config/imports'

import Maintenance from '../components/modules/services/Maintenance'
import WebDesign from '../components/modules/services/WebDesign'
import PWA from '../components/modules/services/PWA'
import Forest from '../media/images/misty-forest.jpg'

export default () => (
  <Cover
    img={Forest}
    gradient='linear-gradient(
    to right bottom,
    rgba(50, 50, 50, 0.35),
    rgba(100, 100, 100, 0.35)
  )'
    heading='Services That Help Businesses at Every Stage of Their
    Project.'
    text='With strong values behind every decision I make, I can
    help your business succeed while also leaving your
    customers happy, and the world better off.'
    light
  >
    <SEO
      title='Services | Dustin Heisey'
      description='Placeholder'
    />
    <WebDesign />
    <PWA />
    <Maintenance />
  </Cover>
)

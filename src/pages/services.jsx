import { React, Cover, SEO } from '../../config/imports'

import Maintenance from '../components/modules/services/Maintenance'
import WebDesign from '../components/modules/services/WebDesign'
import PWA from '../components/modules/services/PWA'

const Content = {
  heading:
    'Services That Help Businesses at Every Stage of Their Project.',
  text:
    'With strong values behind every decision I make, I can help your business succeed while also leaving your customers happy, and the world better off.',
  index: 3
}
export default () => (
  <Cover
    heading={Content.heading}
    text={Content.text}
    img={Content.index}
  >
    <SEO title='Services | Dustin Heisey' description='' />
    <WebDesign />
    <PWA />
    <Maintenance />
  </Cover>
)

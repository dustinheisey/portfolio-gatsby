import { React, Cover, SEO } from '../../config/imports'

import Optimize from '../components/modules/optimize/Optimize'
import Maintenance from '../components/modules/optimize/Maintenance'

import Waterfall from '../media/images/waterfall.jpg'

export default () => (
  <Cover
    img={Waterfall}
    gradient='linear-gradient(
to right bottom,
rgba(50, 50, 50, 0.35),
rgba(100, 100, 100, 0.35)
)'
    heading='Let Me Take Care of Your Website While you Focus on Growing Your Business.'
    text=" The web is constantly changing, and your business is constantly growing. Let me keep your site
    up to date and working while you deal with the new business you're getting."
    light
  >
    <SEO
      title='Optimization & Maintenance | Dustin Heisey'
      description=''
    />
    <Optimize />
    <Maintenance />
  </Cover>
)

import { React, Cover } from '../../config/imports'

import Optimize from '../components/modules/optimize/Optimize'
import Maintenance from '../components/modules/optimize/Maintenance'

const Content = {
  title:
    'Optimization and Maintenance for Portland Businesses | Dustin Heisey',
  description:
    "The web is constantly changing, and your business is constantly growing. Let me keep your site up to date and working while you deal with the new business you're getting.",
  heading:
    'Let Me Take Care of Your Website While you Focus on Growing Your Business.',
  text:
    'The web is constantly changing, and your business is constantly growing. Let me keep your site up to date and working while you deal with the new business you&apos;re getting.',
  index: 6
}
export default () => (
  <Cover
    heading={Content.heading}
    text={Content.text}
    img={Content.index}
    title={Content.title}
    description={Content.description}
  >
    <Optimize />
    <Maintenance />
  </Cover>
)

import {
  React,
  Section
} from '../../../../../config/imports'

import Minimalism from '../../../../media/images/digital-minimalism.jpg'

import Info from './Info'

export default () => (
  <Section style={{ gridGap: 'var(--xxl)' }} left xxl>
    <img
      style={{ width: '100%' }}
      src={Minimalism}
      alt='Digital Minimalism'
    />
    <Info />
  </Section>
)

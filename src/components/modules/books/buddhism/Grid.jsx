import {
  React,
  Section
} from '../../../../../config/imports'

import Buddhism from '../../../../media/images/buddhism.jpg'

import Info from './Info'

export default () => (
  <Section style={{ gridGap: 'var(--xxl)' }} left xxl>
    <img
      style={{ width: '100%' }}
      src={Buddhism}
      alt='Buddhism'
    />
    <Info />
  </Section>
)

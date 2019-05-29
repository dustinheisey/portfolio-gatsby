import {
  React,
  Section
} from '../../../../../config/imports'

import Earth from '../../../../media/images/uninhabitable-earth.jpeg'

import Info from './Info'

export default () => (
  <Section style={{ gridGap: 'var(--xxl)' }} left xxl>
    <img
      style={{ width: '100%' }}
      src={Earth}
      alt='The Uninhabitable Earth'
    />
    <Info />
  </Section>
)

import {
  React,
  Section
} from '../../../../../config/imports'

import Head from '../../../../media/images/no-head.jpg'

import Info from './Info'

export default () => (
  <Section style={{ gridGap: 'var(--xxl)' }} left xxl>
    <img
      style={{ width: '100%' }}
      src={Head}
      alt='Placeholder'
    />
    <Info />
  </Section>
)

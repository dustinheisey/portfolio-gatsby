import {
  React,
  Section
} from '../../../../../config/imports'

import Habits from '../../../../media/images/atomic-habits.jpg'

import Info from './Info'

export default ({ data }) => (
  <Section style={{ gridGap: 'var(--xxl)' }} left xxl>
    <img
      style={{ width: '100%' }}
      src={Habits}
      alt='Atomic Habits'
    />
    <Info />
  </Section>
)

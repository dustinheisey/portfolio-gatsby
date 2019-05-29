import {
  React,
  Section
} from '../../../../../config/imports'

import Sapiens from '../../../../media/images/sapiens.jpg'

import Info from './Info'

export default () => (
  <Section style={{ gridGap: 'var(--xxl)' }} left xxl>
    <img
      style={{ width: '100%' }}
      src={Sapiens}
      alt='Sapiens'
    />
    <Info />
  </Section>
)

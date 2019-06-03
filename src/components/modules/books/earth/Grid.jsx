import {
  React,
  styled,
  Section
} from '../../../../../config/imports'

import Earth from '../../../../media/images/uninhabitable-earth.jpg'

import Info from './Info'

const StyledSection = styled(Section)`
  grid-template-columns: 1fr 1fr;
`

export default () => (
  <StyledSection style={{ gridGap: 'var(--xxl)' }} left xxl>
    <img
      style={{ width: '100%' }}
      src={Earth}
      alt='The Uninhabitable Earth'
    />
    <Info />
  </StyledSection>
)

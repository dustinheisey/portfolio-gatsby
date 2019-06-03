import {
  React,
  styled,
  Section
} from '../../../../../config/imports'

import Buddhism from '../../../../media/images/buddhism.jpg'

import Info from './Info'

const StyledSection = styled(Section)`
  grid-template-columns: 1fr 1fr;
`
export default () => (
  <StyledSection style={{ gridGap: 'var(--xxl)' }} xxl>
    <img
      style={{ width: '100%' }}
      src={Buddhism}
      alt='Buddhism'
    />
    <Info />
  </StyledSection>
)

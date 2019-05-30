import {
  React,
  styled,
  Section
} from '../../../../config/imports'

import Maintain from '../../../media/svg/inline/optimize-maintain.svg'

const StyledCall = styled.div`
  padding: var(--lg);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export default () => (
  <Section xl left>
    <Maintain style={{ width: '100%' }} />
    <StyledCall>
      <h2>Keep Your Site Up to Date & Bug Free</h2>
      <p>
        If you don&apos;t want to think about keeping your
        website online and your domain name registered, pass
        that responsibility to me and I&apos;ll keep it free
        of bugs as well.
      </p>
    </StyledCall>
  </Section>
)

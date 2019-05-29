import {
  React,
  styled,
  Section,
  Btn
} from '../../../../config/imports'

import Maintenance from '../../../media/svg/inline/maintain.svg'

const StyledCall = styled.div`
  padding: var(--lg);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

const StyledImg = styled(Maintenance)`
  width: 100%;
  margin: auto;
`

export default () => (
  <Section xl left>
    <StyledImg />
    <StyledCall>
      <h2>Optimization & Maintenance</h2>
      <p>
        I optimize your site with the latest practices for
        massive speed, usability, and accessibility
        improvements, while maintaining your site to keep it
        online and bug free.
      </p>
      <Btn
        primary
        link='/optimization-and-maintenance'
        content='Read about optimization and maintenance'
      />
    </StyledCall>
  </Section>
)

import {
  React,
  styled,
  Section,
  Btn
} from '../../../../config/imports'

import Design from '../../../media/svg/inline/custom-design.svg'

const StyledCall = styled.div`
  padding: var(--lg);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

const StyledImg = styled(Design)`
  width: 100%;
  margin: auto;
`

export default () => (
  <Section xl left>
    <StyledImg />
    <StyledCall>
      <h2>Custom Web Design</h2>
      <p>
        I help create or strengthen your online presence
        with a carefully considered web design that is good
        for you, your users, and your community.
      </p>
      <Btn
        primary
        link='/web-design'
        content='Read about custom web design'
      />
    </StyledCall>
  </Section>
)

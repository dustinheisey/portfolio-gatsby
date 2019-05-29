import {
  React,
  styled,
  Section
} from '../../../../config/imports'

import Optimize from '../../../media/svg/inline/optimize-code.svg'

const StyledCall = styled.div`
  padding: var(--lg);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export default () => (
  <Section xl right>
    <StyledCall>
      <h2>Optimize Any Website</h2>
      <p>
        Accessibility, Usability, Speed. These are extremely
        important aspects of web design that often get
        ignored by other designers. Let me optimize your
        site for any improvements that it needs.
      </p>
    </StyledCall>
    <Optimize style={{ width: '100%' }} />
  </Section>
)

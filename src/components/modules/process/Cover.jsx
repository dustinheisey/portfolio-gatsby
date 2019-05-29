/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  React,
  styled,
  Section,
  Btn
} from '../../../../config/imports'

const StyledCall = styled.div`
  padding: var(--lg);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export default () => (
  <Section xl>
    <StyledCall>
      <h1>My Carefully Considered Process</h1>
      <p>
        A website is a work of art, but also a feat of
        careful design. I use a specific process to ensure
        that quality is met with no exceptions, and that it
        can be met in the most efficient and effective way
        possible.
      </p>
      <Btn
        text
        content='See My Process'
        link='/process#process'
      />
    </StyledCall>
  </Section>
)

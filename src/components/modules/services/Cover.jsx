import {
  React,
  styled,
  Section,
  Placeholder
} from '../../../../config/imports'

const StyledSection = styled(Section)`
  background: url(${Placeholder});
  color: #fff;
  align-items: flex-start;
  text-align: start;
  justify-items: start;
`

export default () => (
  <StyledSection xxl>
    <h1 style={{ color: 'var(--text-lighter' }}>
      Services That Help Businesses at Every Stage of Their
      Project.
    </h1>
    <p>
      With strong values behind every decision I make, i can
      help your business succeed while also leaving your
      customers happy, and the world better off.
    </p>
  </StyledSection>
)

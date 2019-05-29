import {
  React,
  styled,
  Section,
  Placeholder
} from '../../../../config/imports'

const StyledSection = styled(Section)`
  background: url(${Placeholder});
  color: #fff;
  text-align: start;
  justify-items: start;
`

export default () => (
  <StyledSection xxl>
    <h1 style={{ color: 'var(--text-lighter)' }} />
    <p />
  </StyledSection>
)

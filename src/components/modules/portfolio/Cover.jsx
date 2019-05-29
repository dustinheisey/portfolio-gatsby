import {
  React,
  styled,
  Section
} from '../../../../config/imports'

const StyledSection = styled(Section)`
  text-align: start;
  justify-items: start;
`

export default () => (
  <StyledSection xxl>
    <h1>Here&apos;s Some Recent Projects.</h1>
    <p>
      Welcome to my portfolio. Check out some of my recent
      work and maybe gather some inspiration for your next
      project.
    </p>
  </StyledSection>
)

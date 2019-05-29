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
    <h1 style={{ color: 'var(--text-lighter)' }}>
      Your Website is Like a Child. Let Me Take Care of It.
    </h1>
    <p>
      The web is constantly changing, and things that worked
      a month ago could be broken now. Let me keep your site
      up to date and working while you attend to better uses
      of your time.
    </p>
  </StyledSection>
)

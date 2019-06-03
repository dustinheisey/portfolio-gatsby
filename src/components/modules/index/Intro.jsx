import {
  React,
  styled,
  Section
} from '../../../../config/imports'

const StyledCall = styled.div`
  padding: var(--lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const StyledAside = styled.aside`
  margin: var(--sm) auto;
`

export default () => (
  <Section xl>
    <StyledCall>
      <StyledAside>
        Hey. welcome to my portfolio.
      </StyledAside>
      <h2 style={{ textAlign: 'center' }}>
        My Name is Dustin Heisey.
      </h2>
      <p style={{ textAlign: 'center' }}>
        I am an expert in User-Centered Web Design & Front
        End Web Development, located in Portland, OR. I love
        creating websites and web apps that help local
        business succeed, and I love it even more when I can
        help them help others.
      </p>
    </StyledCall>
  </Section>
)

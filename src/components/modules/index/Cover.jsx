import {
  React,
  styled,
  Section,
  Header,
  Btn
} from '../../../../config/imports'

import Cafe from '../../../media/images/cafe.jpg'

const StyledHeader = styled(Header)`
  width: 100%;
`
const StyledSection = styled(Section)`
  background: transparent;
  min-height: 100vh;
  color: #fff;
  padding: 0;
  margin: 0;
`
const StyledCall = styled.div`
  padding: var(--xxl);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: var(--text-lighter);
`

// const StyledImg = styled.img`
//   width: 85%;
//   margin: auto;
// `

const StyledContainer = styled.div`
  background: linear-gradient(
      to right bottom,
      rgba(50, 50, 50, 0.55),
      rgba(205, 205, 205, 0.55)
    ),
    url(${Cafe});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  padding: var(--md);
`

export default () => (
  <StyledContainer>
    <StyledHeader light />
    <StyledSection xxl>
      <StyledCall>
        <h1 style={{ color: 'var(--text-lighter)' }}>
          Powerful Web Apps for Businesses and Their
          Customers
        </h1>
        <p style={{ color: 'var(--text-lighter)' }}>
          I make digital experiences that your users will
          love and give you an impressive online presence.
        </p>
        <Btn
          primary
          link='/about'
          content='Learn about me'
        />
      </StyledCall>
    </StyledSection>
  </StyledContainer>
)

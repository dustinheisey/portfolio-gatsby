/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  React,
  styled,
  Section
} from '../../../../config/imports'

import Forest from '../../../media/images/forest.jpg'

const StyledSection = styled(Section)`
  background: url(${Forest});
  background-size: cover;
  color: #fff;
`

const StyledText = styled.div`
  padding: var(--lg);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: start;
`

export default () => (
  <StyledSection xxl>
    <StyledText>
      <h1 style={{ color: 'var(--text-lighter)' }}>
        I Design Websites for Business Owners and Their
        Customers.
      </h1>
      <p style={{ color: 'var(--text-lighter)' }}>
        My name is Dustin Heisey, and I am located in
        Portland, Oregon. I help businesses develop an
        online presence that resonates with people and helps
        you help them in the way only you know how to.
      </p>
    </StyledText>
  </StyledSection>
)

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components'
import GlobalStyle from '../../../../config/global'
import Header from '../header/Header'
import Coffee from '../Coffee'
import Footer from '../footer/Footer'
import Section from '../../elements/molecules/Section'

const StyledContainer = styled.header`
  background: ${props => props.gradient},
    url(${props => props.img});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  width: 100%;
  padding: var(--md);
`
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

export default ({
  light,
  gradient,
  img,
  heading,
  text,
  btn,
  children
}) => (
  <>
    <GlobalStyle />
    <StyledContainer gradient={gradient} img={img}>
      <StyledHeader light={light} />
      <StyledSection xxl>
        <StyledCall>
          <h1 style={{ color: 'var(--text-lighter)' }}>
            {heading}
          </h1>
          <p style={{ color: 'var(--text-lighter)' }}>
            {text}
          </p>
          {btn}
        </StyledCall>
      </StyledSection>
    </StyledContainer>
    <main>{children}</main>
    <Coffee />
    <Footer />
  </>
)

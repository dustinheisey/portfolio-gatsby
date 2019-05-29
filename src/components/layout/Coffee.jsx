/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components'

// import Email from '../../media/images/backgrounds/green_cup.png'
import Section from '../elements/molecules/Section'
import Coffee from '../../media/images/coffee.jpg'
import Btn from '../elements/atoms/Btn'

const StyledCall = styled(Section)`
  background: linear-gradient(
      to right bottom,
      rgba(50, 50, 50, 0.3),
      rgba(100, 100, 100, 0.3)
    ), url(${Coffee});
  background-size: cover;
  background-position: 50% 75%;
  background-attachment: fixed;
  min-height: 75vh;
  color: #fff;

  & * {
    margin: var(--xs) 0;
  }
`
export default () => (
  <StyledCall xxl>
    <h2 style={{ color: 'var(--text-lighter)' }}>
      Let&apos;s Get Coffee
    </h2>
    <p style={{ color: 'var(--text-lighter)' }}>
      I&apos;d love to get to know you and your business
    </p>
    <Btn light text content="Let's Connect" link='/contact' color="var(--text-secondary-lighter)" />
  </StyledCall>
)

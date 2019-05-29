/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components'
import Link from '../../elements/atoms/Link'

const StyledContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--md);
  background: var(--primary-dark);
`
const StyledList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;

  & * {
    margin: 0;
    margin-left: var(--sm);
  }
`

export default () => (
  <StyledContainer>
    <small>
      <p style={{ display: 'inline', color: '#fff' }}>
        &copy; 2019&nbsp;
      </p>
      <Link
        color='var(--text-lighter)'
        hover='var(--primary-light)'
        to='/'
      >
        Dustin Heisey.&nbsp;
      </Link>
      <p style={{ display: 'inline', color: '#fff' }}>
        Images by&nbsp;
      </p>
      <Link
        external
        color='var(--text-lighter)'
        hover='var(--primary-light)'
        to='https://www.kylekrempleyphoto.com'
      >
        Trinamic Studio LLC
      </Link>
    </small>
    <StyledList>
      <li>
        <small>
          <Link
            color='var(--text-lighter)'
            hover='var(--primary-light)'
            to='/privacy-policy'
          >
            Privacy Policy
          </Link>
        </small>
      </li>
      <li>
        <small>
          <Link
            color='var(--text-lighter)'
            hover='var(--primary-light)'
            to='/terms-of-use'
          >
            Terms of Use
          </Link>
        </small>
      </li>
    </StyledList>
  </StyledContainer>
)

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components'
import NavMobile from './NavMobile'
import NavDesktop from './Nav'
import Btn from '../../elements/atoms/Btn'
import Logo from '../../../media/svg/logo.svg'
import LogoLight from '../../../media/svg/logo-light.svg'
import { media } from '../../../../config/global'

const StyledHeader = styled.header`
  background: transparent;
`
const StyledNav = styled.nav`
  display: none;
  height: 8vmin;
  background: transparent;
  color: #fff;

  ${media.up('tabletPortrait')`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--xs) var(--md)`}
  background: transparent;
`
const StyledLogo = styled.img`
  height: 80%;
  margin: 0;
`

const StyledBtn = styled(Btn)`
  height: 100%;
  background: transparent;
`

export default ({ light }) => {
  if (light) {
    return (
      <StyledHeader>
        <StyledNav>
          <a href='/' to='/' style={{ height: '80%' }}>
            <StyledLogo
              style={{ height: '100%' }}
              src={LogoLight}
              alt='Logo'
            />
          </a>
          <NavDesktop light />
          <StyledBtn content='Contact' link='/contact' />
        </StyledNav>
        <NavMobile />
      </StyledHeader>
    )
  }
  return (
    <StyledHeader>
      <StyledNav>
        <a href='/' to='/' style={{ height: '80%' }}>
          <StyledLogo
            style={{ height: '100%' }}
            src={Logo}
            alt='Logo'
          />
        </a>
        <NavDesktop />
        <StyledBtn content='Contact' link='/contact' />
      </StyledNav>
      <NavMobile />
    </StyledHeader>
  )
}

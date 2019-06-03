import Logo from '../../../media/svg/logo.svg'
import LogoLight from '../../../media/svg/logo-light.svg'

import {
  React,
  styled,
  NavMobile,
  NavMobileLight,
  NavDesktop,
  Btn,
  media
} from '../../../../config/imports'

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
const StyledLogoDesktop = styled.img`
  height: 80%;
  margin: 0;

  ${media.down('phone')`
    display: none;
  `}
`

const StyledLogoMobile = styled.img`
  height: 80%;
  margin: 0;

  ${media.up('phone')`
    display: none;
  `}
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
          <a href='/' style={{ height: '80%' }}>
            <StyledLogoDesktop
              style={{ height: '100%' }}
              src={LogoLight}
              alt='Logo'
            />
          </a>
          <NavDesktop light />
          <StyledBtn content='Contact' link='/contact' />
        </StyledNav>
        <a href='/' style={{ height: '80%' }}>
          <StyledLogoMobile
            style={{
              marginLeft: 'var(--sm)',
              marginTop: 'var(--sm)',
              width: '5vmin'
            }}
            src={LogoLight}
            alt='Logo'
          />
        </a>
        <NavMobileLight />
      </StyledHeader>
    )
  }
  return (
    <StyledHeader>
      <StyledNav>
        <a href='/' style={{ height: '80%' }}>
          <StyledLogoDesktop
            style={{ height: '100%' }}
            src={Logo}
            alt='Logo'
          />
        </a>
        <NavDesktop />
        <StyledBtn content='Contact' link='/contact' />
      </StyledNav>
      <a href='/' style={{ height: '80%' }}>
        <StyledLogoMobile
          style={{
            marginLeft: 'var(--sm)',
            marginTop: 'var(--sm)',
            width: '5vmin'
          }}
          src={Logo}
          alt='Logo'
        />
      </a>
      <NavMobile />
    </StyledHeader>
  )
}

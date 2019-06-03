import { slide as Menu } from 'react-burger-menu'

import {
  React,
  styled,
  Component,
  media,
  Link
} from '../../../../config/imports'

const StylesLight = {
  bmBurgerButton: {
    position: 'absolute',
    width: '36px',
    height: '30px',
    right: 'var(--xl)',
    top: 'var(--xl)'
  },
  bmBurgerBars: {
    height: '4px',
    background: 'var(--secondary-light)'
  },
  bmBurgerBarsHover: {
    background: 'var(--secondary-light)'
  },
  bmCrossButton: {
    height: '20px',
    width: '20px',
    top: '-5%',
    right: '7%'
  },
  bmCross: {
    background: 'var(--primary)',
    height: '20px'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: 'var(--secondary-light)',
    padding: '2.5em .5em 0',
    height: '100%',
    fontSize: '1.15em',
    position: 'absolute',
    width: '100%',
    top: '-9.8%'
  },
  bmMorphShape: {
    fill: 'var(--secondary-light)'
  },
  bmItemList: {
    color: 'var(--secondary-light)',
    height: '100%',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
  //   button: {
  //     top: 'var(--md)',
  //     right: 'var(--md)'
  //   },
  //   span: {
  //     top: '-180%',
  //     position: 'absolute'
  //   }
}

const StyledNav = styled.nav`
  padding: 0;
  & ul {
    list-style: none;
  }
`

const Container = styled.div`
  display: none;
  ${media.down('phone')`display: flex;`}
`

class NavMobileLight extends Component {
  showSettings(event) {
    event.preventDefault()
  }

  render() {
    return (
      <Container>
        <Menu
          width='100%'
          right
          disableAutoFocus
          styles={StylesLight}
        >
          <StyledNav>
            <ul>
              <li>
                <Link to='/' dark>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/about' dark>
                  About
                </Link>
              </li>
              <li>
                <Link to='/services' dark>
                  Services
                </Link>
              </li>
              <li>
                <Link to='/portfolio' dark>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to='/contact' dark>
                  Contact
                </Link>
              </li>
            </ul>
          </StyledNav>
        </Menu>
      </Container>
    )
  }
}

export default NavMobileLight

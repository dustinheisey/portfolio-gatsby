/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'
import styled from 'styled-components'
import { media } from '../../../../config/global'
import Link from '../../elements/atoms/Link'

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em .5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

const StyledNav = styled.nav`
  padding: 0;
  & ul {
    list-style: none;
  }
`

const Container = styled.div`
  display: none;
  ${media.down('phone')`display: block;`}
`

class NavMobile extends Component {
  showSettings(event) {
    event.preventDefault()
  }

  render() {
    return (
      <Container id='outer-container'>
        <Menu
          right
          push
          disableAutoFocus
          styles={styles}
          pageWrapId='page-wrap'
          outerContainerId='outer-container'
        >
          <main id='page-wrap'>
            <StyledNav>
              <ul>
                <li>
                  <Link link='/'>Home</Link>
                </li>
                <li>
                  <Link link='/about'>About</Link>
                </li>
                <li>
                  <Link link='/services'>Services</Link>
                </li>
                <li>
                  <Link link='/portfolio'>Portfolio</Link>
                </li>
                <li>
                  <Link link='/contact'>Contact</Link>
                </li>
              </ul>
            </StyledNav>
          </main>
        </Menu>
      </Container>
    )
  }
}

export default NavMobile

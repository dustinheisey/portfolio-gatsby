import React from 'react'
import styled from 'styled-components'
// import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from 'gatsby'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.color || 'var(--primary)'};
  display: inline-block;
  word-wrap: nowrap;
  transition: all 0.5s;

  &:hover {
    color: ${props =>
      props.hover || 'var(--primary-darker)'};
  }
`

export default ({
  to,
  color,
  hover,
  external,
  // anchor,
  children
}) => {
  // if (anchor) {
  //   return <AnchorLink href={to}>{children}</AnchorLink>
  // }
  if (external) {
    return (
      <StyledLink
        as='a'
        href={to}
        target='_blank'
        rel='noreferrer noopener'
        color={color}
        hover={hover}
      >
        {children}
      </StyledLink>
    )
  }
  return (
    <StyledLink to={to} color={color} hover={hover}>
      {children}
    </StyledLink>
  )
}

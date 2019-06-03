import { Link } from 'gatsby'
import { React, styled } from '../../../../config/imports'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props =>
    props.dark
      ? 'var(--primary)'
      : 'var(--secondary-light)'};
  display: inline-block;
  word-wrap: normal;
  transition: all 0.5s;

  &:hover {
    color: ${props =>
      props.dark
        ? 'var(--primary-dark)'
        : 'var(--secondary-light)'};
  }
`

export default ({
  to,
  dark,
  external,
  // anchor,
  children
}) => {
  if (external) {
    if (dark) {
      return (
        <StyledLink
          as='a'
          dark
          href={to}
          target='_blank'
          rel='noreferrer noopener'
        >
          {children}
        </StyledLink>
      )
    }
    return (
      <StyledLink
        as='a'
        href={to}
        target='_blank'
        rel='noreferrer noopener'
      >
        {children}
      </StyledLink>
    )
  }

  if (dark) {
    return (
      <StyledLink to={to} dark>
        {children}
      </StyledLink>
    )
  }
  return <StyledLink to={to}>{children}</StyledLink>
}

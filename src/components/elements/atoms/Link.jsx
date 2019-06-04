import { Link } from 'gatsby'
import { React, styled } from '../../../../config/imports'

const StyledLink = styled(Link)`
  text-decoration: none;
  position: relative;
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

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;

    width: 0%;
    height: 100%;

    border-bottom: 2px solid
      ${props =>
        props.dark
          ? 'var(--primary-dark)'
          : 'var(--secondary-light)'};

    transition: width 0.3s ease;
  }

  &:hover:after {
    left: 0;
    width: 100%;
    transition: width 0.3s ease;
  }
`

export default ({ to, dark, external, children }) => {
  if (external) {
    if (dark) {
      return (
        <StyledLink
          as='a'
          dark
          href={to}
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

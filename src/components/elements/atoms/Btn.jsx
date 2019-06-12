import { Link } from 'gatsby'
import { React, styled } from '../../../../config/imports'

const StyledButton = styled(Link)`
  text-decoration: none;
  border-radius: 5px;
  border: none;
  outline: none;
  padding: var(--sm) var(--md);
  transition: all 0.5s;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }
`

const StyledPrimary = styled(StyledButton)`
  background: var(--primary);
  color: var(--secondary-light);
  &:hover {
    background: var(--primary-dark);
  }

  & * {
    color: var(--secondary-lighter);
  }
`

const StyledOutline = styled(StyledButton)`
  background: transparent;
  border: 2px solid var(--primary-lighter);
  color: var(--primary-lighter);

  &:hover {
    color: #fff;
    border-color: var(--primary-lighter);
    background: var(--primary-lighter);
  }
`

const StyledText = styled(StyledButton)`
  border: none;
  background: transparent;
  color: ${props =>
    props.light ? 'var(--text-lighter)' : 'var(--primary)'};
  padding: 0;

  &:hover {
    background: var(--primary);
    padding: var(--sm) var(--md);
    color: var(--text-lighter);
  }
`

const Btn = ({
  content,
  link,
  light,
  external,
  text,
  outline,
  form,
  anchor
}) => {
  if (text) {
    return (
      <StyledText to={link} external={external}>
        {content}
      </StyledText>
    )
  }

  if (outline) {
    return (
      <StyledOutline to={link} external={external}>
        {content}
      </StyledOutline>
    )
  }

  if (form) {
    return (
      <StyledPrimary as='button' type='submit'>
        {content}
      </StyledPrimary>
    )
  }
  if (external) {
    return (
      <StyledPrimary as='a' href={link}>
        {content}
      </StyledPrimary>
    )
  }
  return <StyledPrimary to={link}>{content}</StyledPrimary>
}

export default Btn

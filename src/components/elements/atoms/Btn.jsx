import {
  React,
  styled,
  Link
} from '../../../../config/imports'

const StyledButton = styled.button`
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
      <StyledText type='button' light={light}>
        <Link to={link} external={external} anchor={anchor}>
          {content}
        </Link>
      </StyledText>
    )
  }

  if (outline) {
    return (
      <StyledOutline type='button'>
        <Link to={link} external={external} anchor={anchor}>
          {content}
        </Link>
      </StyledOutline>
    )
  }

  if (form) {
    return (
      <StyledPrimary type='submit'>{content}</StyledPrimary>
    )
  }
  return (
    <StyledPrimary type='button'>
      <Link
        color='var(--secondary-light)'
        to={link}
        external={external}
        anchor={anchor}
      >
        {content}
      </Link>
    </StyledPrimary>
  )
}

export default Btn

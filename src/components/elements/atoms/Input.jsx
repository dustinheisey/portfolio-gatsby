import { React, styled } from '../../../../config/imports'

const StyledLabel = styled.label``
const StyledInput = styled.input`
  outline: none;
  padding: var(--sm);
  border-radius: 5px;
  border: none;
  margin-right: var(--sm);
`

const StyledSubmit = styled.input`
  outline: none;
  padding: var(--sm) var(--md);
  margin: var(--sm);
  border-radius: 5px;
  transition: all 0.5s;

  background: var(--primary);
  color: var(--secondary-lighter);

  &:hover {
    background: var(--primary-dark);
  }
`

const StyledArea = styled.textarea`
  outline: none;
  margin: var(--sm);
`

export default ({ name, type }) => {
  if (type === 'search') {
    return (
      <StyledLabel htmlFor={name}>
        {name}
        <StyledInput type='search' name={name} />
      </StyledLabel>
    )
  }
  if (type === 'submit') {
    return (
      <StyledLabel htmlFor={name}>
        {name}
        <StyledSubmit type='submit' name={name} />
      </StyledLabel>
    )
  }

  if (type === 'area') {
    return (
      <StyledLabel htmlFor={name}>
        {name}
        <StyledArea name={name} />
      </StyledLabel>
    )
  }
  return (
    <StyledLabel htmlFor={name}>
      {name}
      <StyledInput type={type} name={name} />
    </StyledLabel>
  )
}

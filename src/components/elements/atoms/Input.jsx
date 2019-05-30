import { React, styled } from '../../../../config/imports'

const StyledLabel = styled.label``
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
        <input style={{border: '1px solid var(--secondary)', borderRadius: '5px'}} type='search' name={name} />
      </StyledLabel>
    )
  }
  if (type === 'submit') {
    return (
      <StyledLabel htmlFor={name}>
        {name}
        <input style={{border: '1px solid var(--secondary)', borderRadius: '5px'}} type='submit' name={name} />
      </StyledLabel>
    )
  }

  if (type === 'area') {
    return (
      <StyledLabel htmlFor={name}>
        {name}
        <textarea style={{border: '1px solid var(--secondary)', marginTop: 'var(--sm)', borderRadius: '5px'}} name={name} />
      </StyledLabel>
    )
  }
  return (
    <StyledLabel htmlFor={name}>
      {name}
      <input style={{border: '1px solid var(--secondary)', marginTop: 'var(--sm)', borderRadius: '5px'}} type={type} name={name} />
    </StyledLabel>
  )
}

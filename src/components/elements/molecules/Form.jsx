import { React, styled } from '../../../../config/imports'

const StyledForm = styled.form`
  margin: 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & * {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: var(--sm);

    & input,
    textarea {
      border: none;
      border-radius: 3px;
      outline: none;
      background: var(--secondary-light);
      width: 100%;
    }

    & textarea {
      margin: 0;
      padding: 0;
      margin-bottom: var(--sm);
    }
  }
`

export default ({ name, children }) => (
  <StyledForm name={name} method='POST' data-netlify='true'>
    {children}
  </StyledForm>
)

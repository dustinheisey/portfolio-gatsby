import { React, styled } from '../../../../config/imports'

const StyledForm = styled.form`
  margin: 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export default ({ name, children }) => (
  <form
    style={{
      margin: '0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flexStart',
      justifyContent: 'center'
    }}
    name={name}
    method='POST'
    data-netlify='true'
    data-netlify-honeypot='bot-field'
  >
    {children}
  </form>
)

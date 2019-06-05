/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-lone-blocks */
import {
  React,
  styled,
  media,
  Input,
  Btn
} from '../../../../config/imports'

//   const StyledInfo = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     color: #fff;
//     justify-content: center;
//     & img {
//       width: 15vmin;
//     }

//     ${media.down('phone')`margin-bottom: var(--xxl)`}
//   `
//   const StyledInputList = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin: 0;

//     & * {
//       margin-right: var(--sm);
//     }
//   `

export default () => (
  <form
    name='footer'
    method='POST'
    action='/success/'
    data-netlify='true'
    data-netlify-honeypot='bot-field'
  >
    <input type='hidden' name='form-name' value='footer' />
    <p hidden>
      <label>
        Don’t fill this out:
        <input name='bot-field' />
      </label>
    </p>
    <div>
      <label htmlFor='email'>Email</label>
      <input
        id='email'
        type='email'
        name='email'
        autoComplete='email'
      />
    </div>
    <button type='submit'>Send</button>
  </form>
)

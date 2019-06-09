/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-lone-blocks */
import {
  React,
  styled,
  media,
  Btn
} from '../../../../config/imports'

const StyledContainer = styled.div``

export default () => (
  <StyledContainer>
    <h4 style={{ marginBottom: 'var(--md)' }}>
      I&apos;ll get in touch instead
    </h4>
    <h3>Not ready to send a message yet?</h3>
    <p>
      No worries. Give me your email and I&apos;ll send you
      one.
    </p>
    <form
      name='footer'
      method='POST'
      action='/success/'
      data-netlify='true'
      data-netlify-honeypot='bot-field'
    >
      <input
        type='hidden'
        name='form-name'
        value='footer'
      />
      <p hidden>
        <label>
          Don’t fill this out:
          <input name='bot-field' />
        </label>
      </p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom: 'var(--md)'
        }}
      >
        <label
          htmlFor='email'
          hidden
          style={{ color: 'var(--primary)' }}
        >
          Email
        </label>
        <div
          style={{
            display: 'flex',
            marginTop: 'var(--sm)'
          }}
        >
          <input
            title='Email Address'
            id='email'
            type='email'
            name='email'
            autoComplete='email'
            style={{
              width: '75%',
              border: '1px solid var(--secondary)',
              borderRadius: '5px',
              marginRight: 'var(--sm)'
            }}
          />
          <Btn form content='Send' />
        </div>
      </div>
    </form>
  </StyledContainer>
)

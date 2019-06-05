/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  React,
  styled,
  Btn,
  Link
} from '../../../../config/imports'

export default () => (
  <div style={{ margin: 'auto', padding: 'var(--lg)' }}>
    <div>
      <h1>Interested in Making Something Great?</h1>
      <p>
        If your interested in learning more about how I can
        help, text or call me at&nbsp;
        <Link external dark to='tel:+4697189783'>
          (469) 718 - 9783
        </Link>
        , send me an email at&nbsp;
        <Link
          external
          dark
          to='mailto:hello@dustinheisey.com'
        >
          hello@dustinheisey.com
        </Link>
        &nbsp;or fill out the form below and I&apos;ll get
        back to you ASAP.
      </p>
    </div>
    <form
      name='contact'
      method='POST'
      action='/success/'
      data-netlify='true'
      data-netlify-honeypot='bot-field'
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
      }}
    >
      <input
        type='hidden'
        name='form-name'
        value='contact'
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
          alignItems: 'flexStart',
          marginBottom: 'var(--sm)'
        }}
      >
        <label
          htmlFor='name'
          style={{ marginBottom: 'var(--xs)' }}
        >
          Name
        </label>
        <input
          type='text'
          id='name'
          name='name'
          autoComplete='name'
          style={{
            width: '100%',
            border: '1px solid var(--secondary)',
            borderRadius: '5px',
            marginRight: 'var(--sm)'
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flexStart',
          marginBottom: 'var(--sm)'
        }}
      >
        <label
          htmlFor='email'
          style={{ marginBottom: 'var(--xs)' }}
        >
          Email
        </label>
        <input
          id='email'
          type='email'
          name='email'
          autoComplete='email'
          style={{
            width: '100%',
            border: '1px solid var(--secondary)',
            borderRadius: '5px',
            marginRight: 'var(--sm)'
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flexStart',
          marginBottom: 'var(--sm)'
        }}
      >
        <label
          htmlFor='tel'
          style={{ marginBottom: 'var(--xs)' }}
        >
          Phone Number
          <em
            style={{
              fontSize: '75%'
            }}
          >
            {' '}
            - Optional
          </em>
        </label>
        <input
          id='tel'
          type='tel'
          name='tel'
          autoComplete='tel'
          style={{
            width: '100%',
            border: '1px solid var(--secondary)',
            borderRadius: '5px',
            marginRight: 'var(--sm)'
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flexStart',
          marginBottom: 'var(--sm)'
        }}
      >
        <label
          htmlFor='message'
          style={{ marginBottom: 'var(--xs)' }}
        >
          Message
        </label>
        <textarea
          id='message'
          name='message'
          rows='6'
          style={{
            width: '100%',
            border: '1px solid var(--secondary)',
            borderRadius: '5px',
            marginRight: 'var(--sm)'
          }}
        />
      </div>
      <Btn form content='Send' />
    </form>
  </div>
)

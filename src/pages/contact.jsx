/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  React,
  styled,
  Bare,
  SEO,
  Section,
  Btn,
  Link,
  Grid
} from '../../config/imports'

import Contact from '../media/svg/inline/contact.svg'

const StyledContainer = styled.div`
  width: 100%;

  & * {
    width: 100%;
  }
`

const StyledForm = styled.form`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export default () => (
  <Bare>
    <SEO
      title='Contact | Dustin Heisey'
      description='Interested in learning more about how I can
      help? Check out how now!'
    />
    <Section xl>
      <Grid columns={2}>
        <Contact style={{ margin: 'auto' }} />
        <div
          style={{ margin: 'auto', padding: 'var(--lg)' }}
        >
          <div>
            <h1>Interested in Making Something Great?</h1>
            <p>
              If your interested in learning more about how
              I can help, text or call me at&nbsp;
              <Link page link='tel:+4697189783'>
                (469) 718 - 9783
              </Link>
              , send me an email at&nbsp;
              <Link
                page
                link='mailto:hello@dustinheisey.com'
              >
                hello@dustinheisey.com
              </Link>
              &nbsp;or fill out the form below and I&apos;ll
              get back to you ASAP.
            </p>
          </div>
          <StyledForm
            name='Contact'
            method='POST'
            action='/success'
            data-netlify='true'
            data-netlify-recaptcha='true'
            data-netlify-honeypot='bot-field'
          >
            <input
              type='hidden'
              name='form-name'
              value='Contact'
            />
            <p hidden>
              <label>
                Don’t fill this out:
                <input name='bot-field' />
              </label>
            </p>
            <StyledContainer style={{ width: '100%' }}>
              <label htmlFor='name'>Name</label>
              <input
                style={{
                  border: '1px solid var(--secondary)',
                  marginTop: 'var(--xs)',
                  marginBottom: 'var(--sm)',
                  borderRadius: '5px'
                }}
                type='text'
                name='name'
                autoComplete='name'
                required
              />
              <label htmlFor='phone'>Phone</label>
              <input
                style={{
                  border: '1px solid var(--secondary)',
                  marginTop: 'var(--xs)',
                  marginBottom: 'var(--sm)',
                  borderRadius: '5px'
                }}
                type='tel'
                name='phone'
                autoComplete='tel'
                required
              />
              <label htmlFor='message'>Message</label>
              <textarea
                style={{
                  border: '1px solid var(--secondary)',
                  marginTop: 'var(--xs)',
                  marginBottom: 'var(--sm)',
                  borderRadius: '5px'
                }}
                name='message'
                required
              />
            </StyledContainer>
            <Btn form content='Submit' />
          </StyledForm>
        </div>
      </Grid>
    </Section>
  </Bare>
)

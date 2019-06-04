/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  React,
  styled,
  Bare,
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

const Content = {
  title: 'Contact | Dustin Heisey',
  description:
    'Interested in learning more about how I can help? Check out how now!'
}

export default () => (
  <Bare
    title={Content.title}
    description={Content.description}
  >
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
              &nbsp;or fill out the form below and I&apos;ll
              get back to you ASAP.
            </p>
          </div>
          <StyledForm
            name='Contact'
            // method='POST'
            // action='/success/'
            // data-netlify='true'
            // data-netlify-recaptcha='true'
            // data-netlify-honeypot='bot-field'
            action='https://formsubmit.co/ebc0e00326ae2dcdd2ef97cf3367e046'
            method='POST'
          >
            {/* <input
              type='hidden'
              name='form-name'
              value='contact'
            />
            <p hidden>
              <label>
                Don’t fill this out:
                <input name='bot-field' />
              </label>
            </p> */}
            <input
              type='hidden'
              name='_next'
              value='https://dustinheisey.com/success'
            />
            <input
              type='text'
              name='_honey'
              style={{ display: 'none' }}
            />
            <input
              type='hidden'
              name='_captcha'
              value='false'
            />
            <StyledContainer style={{ width: '100%' }}>
              <label htmlFor='Name'>Name</label>
              <input
                style={{
                  border: '1px solid var(--secondary)',
                  marginTop: 'var(--xs)',
                  marginBottom: 'var(--sm)',
                  borderRadius: '5px'
                }}
                type='text'
                name='Name'
                autoComplete='name'
                required
              />
              <label htmlFor='Tel'>Phone</label>
              <input
                style={{
                  border: '1px solid var(--secondary)',
                  marginTop: 'var(--xs)',
                  marginBottom: 'var(--sm)',
                  borderRadius: '5px'
                }}
                type='tel'
                name='Tel'
                autoComplete='tel'
                required
              />
              <label htmlFor='Message'>Message</label>
              <textarea
                style={{
                  border: '1px solid var(--secondary)',
                  marginTop: 'var(--xs)',
                  marginBottom: 'var(--sm)',
                  borderRadius: '5px'
                }}
                name='Message'
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

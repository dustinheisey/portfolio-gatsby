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
    contact
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
          <form
            name='contact'
            method='POST'
            action='/success/'
            data-netlify='true'
            data-netlify-honeypot='bot-field'
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
            <div>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                id='name'
                name='name'
                autoComplete='name'
              />
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input
                id='email'
                type='email'
                name='email'
                autoComplete='email'
              />
            </div>
            <div>
              <label htmlFor='tel'>
                Phone Number
                <em> - Optional</em>
              </label>
              <input
                id='tel'
                type='tel'
                name='tel'
                autoComplete='tel'
              />
            </div>
            <div>
              <label htmlFor='message'>Message</label>
              <textarea
                id='message'
                name='message'
                rows='6'
              />
            </div>
            <button type='submit'>Send</button>
          </form>
        </div>
      </Grid>
    </Section>
  </Bare>
)

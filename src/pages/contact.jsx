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
          <form
            style={{
              margin: '0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flexStart',
              justifyContent: 'center'
            }}
            name='Contact'
            method='POST'
            data-netlify='true'
            data-netlify-honeypot='bot-field'
          >
            <StyledContainer style={{ width: '100%' }}>
              <label htmlFor='name'>
                Name
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
                />
              </label>
              <label htmlFor='phone'>
                Phone
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
                />
              </label>
              <label htmlFor='message'>
                Message
                <textarea
                  style={{
                    border: '1px solid var(--secondary)',
                    marginTop: 'var(--xs)',
                    marginBottom: 'var(--sm)',
                    borderRadius: '5px'
                  }}
                  name='message'
                />
              </label>
            </StyledContainer>
            <Btn primary type='submit' content='Submit' />
          </form>
        </div>
      </Grid>
    </Section>
  </Bare>
)

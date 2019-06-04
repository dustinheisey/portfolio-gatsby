/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-lone-blocks */
import {
  React,
  styled,
  media,
  Copywrite,
  Input,
  Btn,
  Link
} from '../../../../config/imports'

const StyledFooter = styled.footer`
  ${media.down('phone')``}
`
const StyledContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--xl) var(--xxl);
  background: var(--secondary-lighter);

  ${media.down('phone')`
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`
const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #fff;
  justify-content: center;
  & img {
    width: 15vmin;
  }

  ${media.down('phone')`margin-bottom: var(--xxl)`}
`
const StyledInputList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;

  & * {
    margin-right: var(--sm);
  }
`
const StyledList = styled.ul`
  list-style: none;
  display: grid;
  grid-gap: var(--sm) var(--lg);
  grid-template-columns: repeat(2, 1fr);
  margin: 0;

  ${media.down(
    'phone'
  )`justify-items: start; text-align: start;`}
`
export default () => (
  <StyledFooter>
    <StyledContainer>
      <StyledInfo>
        <aside>I&apos;ll get in touch instead</aside>
        <h3
          style={{
            color: 'var(--text-dark)',
            marginTop: 'var(--md)'
          }}
        >
          Not ready to send me a message?
        </h3>
        <p style={{ color: 'var(--text-dark)' }}>
          No worries. Give me your email and I&apos;ll send
          you one.
        </p>
        <form
          name='Footer'
          action='https://formsubmit.co/ebc0e00326ae2dcdd2ef97cf3367e046'
          method='POST'
          // method='POST'
          // action='/success/'
          // data-netlify='true'
          // data-netlify-recaptcha='true'
          // data-netlify-honeypot='bot-field'
        >
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
          <label htmlFor='email' hidden>
            Email
          </label>
          <input
            style={{
              border: '1px solid var(--secondary)',
              marginRight: 'var(--sm)',
              width: '50%',
              padding: 'var(--xs)',
              borderRadius: '5px'
            }}
            type='email'
            name='Email Address'
            autoComplete='on'
            required
          />
          <Btn form content='Submit' />
        </form>
      </StyledInfo>
      <StyledList>
        <li>
          <Link dark to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link dark to='/about'>
            About
          </Link>
        </li>
        <li>
          <Link dark to='/process'>
            Process
          </Link>
        </li>
        <li>
          <Link dark to='/recommended-books'>
            Recommended Books
          </Link>
        </li>
        <li>
          <Link dark to='/services'>
            Services
          </Link>
        </li>
        <li>
          <Link dark to='/web-design'>
            Custom Web Design
          </Link>
        </li>
        <li>
          <Link dark to='/progressive-web-apps'>
            Progressive Web Apps
          </Link>
        </li>
        <li>
          <Link dark to='/optimization-and-maintenance'>
            Optimization and Maintenance
          </Link>
        </li>
        <li>
          <Link dark to='/portfolio'>
            Portfolio
          </Link>
        </li>
        <li>
          <Link dark to='/contact'>
            Contact
          </Link>
        </li>
      </StyledList>
    </StyledContainer>
    <Copywrite />
  </StyledFooter>
)

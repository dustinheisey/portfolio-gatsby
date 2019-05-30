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
`
const StyledList = styled.ul`
  list-style: none;
  display: grid;
  grid-gap: var(--sm) var(--lg);
  grid-template-columns: repeat(2, 1fr);
  margin: 0;

  ${media.down('phone')`justify-items: start; text-align: start;`}
`
export default () => (
  <StyledFooter>
    <StyledContainer>
      <StyledInfo>
        <caption>I&apos;ll get in touch instead</caption>
        <h3 style={{ color: 'var(--text-dark)', marginTop: 'var(--md)' }}>
          Not ready to send me a message?
        </h3>
        <p style={{ color: 'var(--text-dark)' }}>
          No worries. Give me your email and I&apos;ll send
          you one.
        </p>
        <StyledInputList>
          <Input style={{border: '1px solid var(--secondary)'}} type='email' />
          <Btn primary link='/contact' content='Send' />
        </StyledInputList>
      </StyledInfo>
      <StyledList>
        <li>
          <Link
            hover='var(--primary-light)'
            to='/'
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            hover='var(--primary-light)'
            to='/about'
          >
            About
          </Link>
        </li>
        <li>
          <Link
            hover='var(--primary-light)'
            to='/process'
          >
            Process
          </Link>
        </li>
        <li>
          <Link
            hover='var(--primary-light)'
            to='/recommended-books'
          >
            Recommended Books
          </Link>
        </li>
        <li>
          <Link
            hover='var(--primary-light)'
            to='/services'
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            hover='var(--primary-light)'
            to='/web-design'
          >
            Custom Web Design
          </Link>
        </li>
        <li>
          <Link
            hover='var(--primary-light)'
            to='/progressive-web-apps'
          >
            Progressive Web Apps
          </Link>
        </li>
        <li>
          <Link
            hover='var(--primary-light)'
            to='/optimization-and-maintenance'
          >
            Optimization and Maintenance
          </Link>
        </li>
        <li>
          <Link
            hover='var(--primary-light)'
            to='/portfolio'
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            hover='var(--primary-light)'
            to='/contact'
          >
            Contact
          </Link>
        </li>
      </StyledList>
    </StyledContainer>
    <Copywrite />
  </StyledFooter>
)

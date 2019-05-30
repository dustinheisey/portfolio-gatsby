import {
  React,
  styled,
  Copywrite,
  Input,
  Btn,
  Link
} from '../../../../config/imports'

const StyledContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--xl) var(--xxl);
  background: var(--primary-darker);
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
`
export default () => (
  <footer>
    <StyledContainer>
      <StyledInfo>
        <h3 style={{ color: 'var(--text-lighter' }}>
          Not ready to send me a message?
        </h3>
        <p>
          No worries. Give me your email and I&apos;ll send
          you one.
        </p>
        <StyledInputList>
          <Input type='email' />
          <Btn primary link='/contact' content='Send' />
        </StyledInputList>
      </StyledInfo>
      <StyledList>
        <li>
          <Link
            color='var(--text-lighter)'
            hover='var(--primary-light)'
            to='/'
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            color='var(--text-lighter)'
            hover='var(--primary-light)'
            to='/about'
          >
            About
          </Link>
        </li>
        <li>
          <Link
            color='var(--text-lighter)'
            hover='var(--primary-light)'
            to='/process'
          >
            Process
          </Link>
        </li>
        <li>
          <Link
            color='var(--text-lighter)'
            hover='var(--primary-light)'
            to='/recommended-books'
          >
            Recommended Books
          </Link>
        </li>
        <li>
          <Link
            color='var(--text-lighter)'
            hover='var(--primary-light)'
            to='/services'
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            color='var(--text-lighter)'
            hover='var(--primary-light)'
            to='/web-design'
          >
            Custom Web Design
          </Link>
        </li>
        <li>
          <Link
            color='var(--text-lighter)'
            hover='var(--primary-light)'
            to='/progressive-web-apps'
          >
            Progressive Web Apps
          </Link>
        </li>
        <li>
          <Link
            color='var(--text-lighter)'
            hover='var(--primary-light)'
            to='/optimization-and-maintenance'
          >
            Optimization and Maintenance
          </Link>
        </li>
        <li>
          <Link
            color='var(--text-lighter)'
            hover='var(--primary-light)'
            to='/portfolio'
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            color='var(--text-lighter)'
            hover='var(--primary-light)'
            to='/contact'
          >
            Contact
          </Link>
        </li>
      </StyledList>
    </StyledContainer>
    <Copywrite />
  </footer>
)
